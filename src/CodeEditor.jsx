import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python'
import { tokyoNight  } from '@uiw/codemirror-theme-tokyo-night'

function CodeEditor() {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val, viewUpdate) => {
    console.log('val:', val);
    setValue(val);
  }, []);
  return (
  <CodeMirror 
  value={value} 
  height="600px" 
  extensions={[javascript({ jsx: true })]} 
  onChange={onChange} 
  theme={tokyoNight }
  />
)
}
export default CodeEditor;