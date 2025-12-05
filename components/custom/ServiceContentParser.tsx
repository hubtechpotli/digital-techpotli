"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";

interface ContentSection {
  type: 'heading' | 'subheading' | 'paragraph' | 'list' | 'intro';
  content: string;
  level?: number;
}

export function ServiceContentParser({ content }: { content: string }) {
  const parseContent = (text: string): ContentSection[] => {
    const sections: ContentSection[] = [];
    const lines = text.split('\n').map(line => line.trim()).filter(line => line);
    
    let currentParagraph = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Detect numbered headings (1. Heading, 2. Heading, etc.)
      if (/^\d+\.\s+[A-Z]/.test(line)) {
        if (currentParagraph) {
          sections.push({ type: 'paragraph', content: currentParagraph });
          currentParagraph = '';
        }
        const headingText = line.replace(/^\d+\.\s+/, '');
        sections.push({ type: 'heading', content: headingText, level: 1 });
        continue;
      }
      
      // Detect list items (bullet points)
      if (/^[•\-\*●]\s/.test(line)) {
        if (currentParagraph) {
          sections.push({ type: 'paragraph', content: currentParagraph });
          currentParagraph = '';
        }
        const listContent = line.replace(/^[•\-\*●]\s*/, '');
        sections.push({ type: 'list', content: listContent });
        continue;
      }
      
      // Detect main headings (short lines, all caps, or key phrases)
      if (
        (line.length < 70 && 
         /^[A-Z]/.test(line) && 
         !line.includes('.') &&
         !line.includes('We ') &&
         !line.includes('Our ') &&
         !line.includes('At ') &&
         (line === line.toUpperCase() || line.split(' ').length <= 8))
      ) {
        if (currentParagraph) {
          sections.push({ type: 'paragraph', content: currentParagraph });
          currentParagraph = '';
        }
        sections.push({ type: 'heading', content: line, level: 1 });
        continue;
      }
      
      // Detect subheadings (medium length, starts with capital, no period)
      if (
        line.length < 100 &&
        /^[A-Z]/.test(line) &&
        !line.endsWith('.') &&
        !line.includes('We ') &&
        !line.includes('Our ') &&
        !line.includes('At ') &&
        line.split(' ').length <= 12
      ) {
        if (currentParagraph) {
          sections.push({ type: 'paragraph', content: currentParagraph });
          currentParagraph = '';
        }
        sections.push({ type: 'subheading', content: line, level: 2 });
        continue;
      }
      
      // Regular paragraph content
      if (line) {
        currentParagraph += (currentParagraph ? ' ' : '') + line;
      }
    }
    
    // Add remaining paragraph
    if (currentParagraph) {
      sections.push({ type: 'paragraph', content: currentParagraph });
    }
    
    return sections;
  };

  const sections = parseContent(content);

  return (
    <div className="space-y-8">
      {sections.map((section, index) => {
        switch (section.type) {
          case 'heading':
            return (
              <div key={index} className="mt-12 first:mt-0">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-teal-500">
                  {section.content}
                </h2>
              </div>
            );
          
          case 'subheading':
            return (
              <div key={index} className="mt-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-teal-500" />
                  {section.content}
                </h3>
              </div>
            );
          
          case 'list':
            return (
              <div key={index} className="flex items-start gap-3 py-2">
                <CheckCircle2 className="h-5 w-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <p className="text-lg text-gray-700 leading-relaxed">{section.content}</p>
              </div>
            );
          
          case 'paragraph':
          default:
            return (
              <p key={index} className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                {section.content}
              </p>
            );
        }
      })}
    </div>
  );
}

