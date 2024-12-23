import { useState, useEffect } from 'react'
import Select from 'react-select'
// import axios from 'axios';
import Output from './Output';
import { executeCode } from './api'
import ThemeContext from './MyContext'
import './App.css'
import CodeEditor from './CodeEditor';
// import { Console, Hook, Unhook } from 'console-feed'

function App() {
  // const [count, setCount] = useState(0)
  const [selectValue, setSelectValue] = useState(1)
  // const [logss, setLogss] = useState([2332, 23])
  const [code, setCode] = useState("console.log('hello world!');");

  // useEffect(() => {
  //   const hookedConsole = Hook(
  //     window.console,
  //     (log) => setLogs((currLogs) => [...currLogs, log]),
  //     false
  //   )
  //   return () => Unhook(hookedConsole)
  // }, [])

  const options = [
    { value: '1', label: 'Javascript' },
    { value: '2', label: 'Python' },
  ]

  const clickRun = async () => {
    if (!code) return;
    try {
      const { run:result } = await executeCode(selectValue, code);
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
    <ThemeContext.Provider value={{selectValue, code, setCode}}>
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
            {/* <Console logs={logs} variant="dark" /> */}
            <Output />
          </div>
        </div>

      </div>
    </ThemeContext.Provider>
  )
}

export default App
