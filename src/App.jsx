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
  const [selectValue, setSelectValue] = useState(1)
  const [code, setCode] = useState("console.log('hello world!');");
  // const [result, setResutl] = useState('')
  

  const options = [
    { value: '1', label: 'Javascript' },
    { value: '2', label: 'Python' },
  ]

  const clickRun = async () => {
    console.log(CODE_SNIPPETS['Javascript']);
    
    if (!code) return;
    try {
      const { run: result } = await executeCode(selectValue, code);
      console.log(result);

    } catch (e) {
      console.log(e);
    }

    console.log('code', code);
    console.log(selectValue == 1 ? "JS" : "python");
    console.log(selectValue)
  }

  const changeHandler = (e) => {
    // console.log(e.value);
    setSelectValue(e.value)
  }

  return (
    <ThemeContext.Provider value={{ selectValue, code, setCode }}>
      <div className='app'>
        <div className="description">
          <h1>Описание задачи</h1>
          Вывести Hello world 3 раза
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
