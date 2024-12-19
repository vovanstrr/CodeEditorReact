import { useState } from 'react'
import Select from 'react-select'
import axios from 'axios';

import './App.css'
import CodeEditor from './CodeEditor';

function App() {
  // const [count, setCount] = useState(0)
  const [selectValue, setSelectValue] = useState(1)

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
      <div className="description">
        <h1>Описание задачи</h1>
        Вывести Hello world 3 раза
      </div>

      <div className='editor'>
        <div className='select'>
          <Select options={options} defaultValue={options[0]} onChange={changeHandler} />
          <button onClick={click}>
            Run
          </button>
          <CodeEditor />
        </div>
        <div className="result">
          dfgdgd
        </div>
      </div>

    </div>
  )
}

export default App
