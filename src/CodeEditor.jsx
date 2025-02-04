import React, { useContext } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import ThemeContext from "./MyContext";

function CodeEditor() {
  const { selectValue, code, setCode } = useContext(ThemeContext);
  // const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val ) => {    //(, viewUpdate)
    console.log("val:", val);

    setCode(val);
  }, []);
  //[javascript({ jsx: true })] [python()]
  console.log("codeEditor ", selectValue == "javascript" ? "JS" : "python");

  return (
    <CodeMirror
      value={code}
      height="300px"
      // width="300px"
      extensions={ selectValue == "javascript" ? [javascript({ jsx: true })] : [python()] }
      onChange={onChange}
      theme={tokyoNight}
    />
  );
}

export default CodeEditor;