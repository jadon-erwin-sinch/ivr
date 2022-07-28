import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

export function CodeEditor() {
    const [code, setCode] = React.useState(
      `
<snippet id='menu1' limit='3'>
    <say TEXT="How may we direct your call?">
    <say TEXT="Press 1 for sales">
    <say TEXT="Press 2 for customer support">
    <onDTMF digits='1'>
        <forward NUMBER='+18012578871'/>
    </onDTMF>
    <onDTMF digits='2'>
        <forward NUMBER='+18012578872'/>
    </onDTMF>
    <onDTMF digits='*'>
        <run-snippet id='menu1'/>
    </onDTMF>
</snippet>
`
    );
    return (
        
      <Editor
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          height:"100%"
        }}
      />
    );
  }