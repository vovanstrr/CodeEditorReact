import { useState } from 'react'
import Select from 'react-select'
import './App.css';
import Output from './Output';
import ThemeContext from './MyContext'
import CodeEditor from './CodeEditor';
import { executeCode } from './api'
import { CODE_SNIPPETS } from "./constants";

// import { Console, Hook, Unhook } from 'console-feed'


function App() {
  // const [count, setCount] = useState(0)
  const [selectValue, setSelectValue] = useState('javascript')
  const [code, setCode] = useState("console.log('hello world!');\nconsole.log('hello world!');\nconsole.log('hello world!');");
  const [result, setResult] = useState({})
  

  const options = [
    { value: 'javascript', label: 'Javascript' },
    { value: 'python', label: 'Python' },
  ]

  const clickRun = async () => {
    // console.log(CODE_SNIPPETS['javascript']);
    
    if (!code) return;
    try {
      const response = await executeCode(selectValue, code);
      console.log('selectValue ', selectValue);
      
      console.log('response ', response);
      setResult(response)
      console.log(result);
      
      // { run: result }

    } catch (e) {
      console.log(e);
    }

    // console.log('code', code);
    console.log(selectValue == 'Javascript' ? "JS" : "python");
    // console.log(selectValue)
  }

  const changeHandler = (e) => {
    // console.log(e.value);
    setSelectValue(e.value)
    setCode(CODE_SNIPPETS[e.value])
  }

  return (
    <ThemeContext.Provider value={{ selectValue, code, setCode }}>
      <div className='app'>
        <div className="description">
          <h1>Описание задачи</h1>
          Вывести Hello World 3 раза
        </div>

        <div className='editor'>
          <div className='select'>
            <Select options={options} defaultValue={options[0]} onChange={changeHandler} />
            <button onClick={clickRun}>
              Run
            </button>
            <CodeEditor />
          </div>
          <div className="result">
            <Output />
          </div>
        </div>

      </div>
    </ThemeContext.Provider>
  )
}

export default App
