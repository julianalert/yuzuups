import React from "react";

// Simple markdown-like renderer for basic formatting
const renderMarkdown = (content: string) => {
  if (!content) return "No content available";
  
  // Split into lines for processing
  const lines = content.split('\n');
  const result: React.ReactNode[] = [];
  let currentParagraph: string[] = [];
  
  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const paragraphContent = currentParagraph.join(' ').trim();
      if (paragraphContent) {
        result.push(
          <p key={result.length} className="mb-4">
            {renderInlineFormatting(paragraphContent)}
          </p>
        );
      }
      currentParagraph = [];
    }
  };
  
  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    
    // Headers
    if (trimmedLine.startsWith('## ')) {
      flushParagraph();
      result.push(
        <h2 key={result.length} className="text-2xl font-bold mt-8 mb-4">
          {trimmedLine.substring(3)}
        </h2>
      );
    } else if (trimmedLine.startsWith('# ')) {
      flushParagraph();
      result.push(
        <h1 key={result.length} className="text-3xl font-bold mt-8 mb-4">
          {trimmedLine.substring(2)}
        </h1>
      );
    } else if (trimmedLine.startsWith('> ')) {
      // Blockquote
      flushParagraph();
      result.push(
        <blockquote key={result.length} className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-700">
          {renderInlineFormatting(trimmedLine.substring(2))}
        </blockquote>
      );
    } else if (trimmedLine === '') {
      // Empty line - flush current paragraph
      flushParagraph();
    } else {
      // Regular text - add to current paragraph
      currentParagraph.push(trimmedLine);
    }
  });
  
  // Flush any remaining paragraph
  flushParagraph();
  
  return result;
};

const renderInlineFormatting = (text: string) => {
  // Handle bold text **text**
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    
    // Handle links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    if (linkRegex.test(part)) {
      return part.replace(linkRegex, (match, text, url) => {
        return `<a href="${url}" class="text-blue-500 hover:underline">${text}</a>`;
      });
    }
    
    return part;
  });
};

export function CustomMDX(props: any) {
  try {
    const content = props.source || "";
    const renderedContent = renderMarkdown(content);
    
    return <div>{renderedContent}</div>;
  } catch (error) {
    console.error("MDX rendering error:", error);
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded">
        <p className="text-red-600">Error rendering content</p>
        <pre className="mt-2 text-sm text-gray-600 whitespace-pre-wrap">
          {props.source || "No content"}
        </pre>
      </div>
    );
  }
}
