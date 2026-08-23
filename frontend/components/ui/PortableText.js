'use client';

import React from 'react';
import { urlFor } from '../../lib/sanity/client';

let PortableTextComponent = null;
try {
  const pt = require('@portabletext/react');
  PortableTextComponent = pt ? pt.PortableText : null;
} catch (e) {
  // fallback to internal renderer if package is resolving asynchronously
}

const components = {
  types: {
    image: ({ value }) => {
      if (!value) return null;
      const imageUrl = urlFor(value)?.url();
      return (
        <figure className="my-6 rounded-2xl overflow-hidden shadow-md">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={value.alt || 'Sanity Image Content'}
              className="w-full h-auto object-cover max-h-[500px]"
            />
          ) : (
            <div className="w-full h-48 bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-700">
              [Image Asset]
            </div>
          )}
          {value.caption && (
            <figcaption className="text-xs text-center text-gray-500 mt-2 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mt-7 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-serif text-lg font-semibold text-gray-900 dark:text-gray-100 mt-5 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#16A34A] pl-4 italic text-gray-700 dark:text-gray-300 my-4 bg-[#F0FDF4] dark:bg-emerald-950/40 py-2 rounded-r-lg">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target ? 'noreferrer noopener' : undefined}
          className="text-[#16A34A] hover:text-[#15803D] underline font-medium"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 text-emerald-600 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
};

// Simple internal block renderer fallback
function renderSimpleBlock(block, index) {
  if (!block) return null;
  if (block._type === 'block') {
    const textContent = (block.children || []).map((c) => c.text || '').join('');
    if (block.style === 'h1') return <h1 key={index} className="text-3xl font-bold my-4">{textContent}</h1>;
    if (block.style === 'h2') return <h2 key={index} className="text-2xl font-bold my-3">{textContent}</h2>;
    if (block.style === 'h3') return <h3 key={index} className="text-xl font-bold my-2">{textContent}</h3>;
    if (block.style === 'blockquote') return <blockquote key={index} className="border-l-4 border-emerald-600 pl-4 italic my-4">{textContent}</blockquote>;
    return <p key={index} className="text-base leading-relaxed mb-4">{textContent}</p>;
  }
  return null;
}

export default function PortableText({ value, className = '' }) {
  if (!value) return null;

  // Handle plain text strings
  if (typeof value === 'string') {
    return (
      <div className={`prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-4 ${className}`}>
        {value.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-base sm:text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  // Handle PortableText block arrays
  if (Array.isArray(value)) {
    if (PortableTextComponent) {
      return (
        <div className={`prose dark:prose-invert max-w-none ${className}`}>
          <PortableTextComponent value={value} components={components} />
        </div>
      );
    }
    return (
      <div className={`prose dark:prose-invert max-w-none ${className}`}>
        {value.map((block, index) => renderSimpleBlock(block, index))}
      </div>
    );
  }

  return null;
}
