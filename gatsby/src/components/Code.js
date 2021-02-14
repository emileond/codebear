import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Code({ node }) {
  if (!node.code) {
    return undefined;
  }
  return (
    <div>
      <SyntaxHighlighter
        language={node.language || 'text'}
        style={dracula}
        wrapLines
      >
        {node.code}
      </SyntaxHighlighter>
    </div>
  );
}

export default Code;
