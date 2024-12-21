import { useState, useEffect } from 'react'
import Select from 'react-select'
import './App.css';
import Output from './Output';
import {executeCode} from './api'
import CodeEditor from './CodeEditor';
import { Console, Hook, Unhook } from 'console-feed'

function App() {
  // const [count, setCount] = useState(0)
  const [selectValue, setSelectValue] = useState(1)
  // const [logs, setLogs] = useState([])

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

  const click = () => {
    console.log('click', selectValue);
  }
  const changeHandler = (e) => {
    console.log(e.value);
    setSelectValue(e.value)
  }

  return (
    <div className='app'>
      <div className='header'>
      <div className='select'>
          <Select options={options} defaultValue={options[0]} onChange={changeHandler} />
          <button onClick={click}>
            Run
          </button>
         
        </div>
      </div>
      <div className="description">
        <h1>Описание задачи</h1>
        Вывести Hello world 3 раза
      </div>

      <div className='editor'>
       
        <CodeEditor />
        <div className="result">
        {/* <Console logs={logs} variant="dark" /> */}
        <Output/>
        </div>
      </div>

    </div>

  )
}

export default App
