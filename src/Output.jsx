import { useState, useEffect, useContext } from 'react'
// import { Console, Hook, Unhook } from 'console-feed'
import ThemeContext from './MyContext';
import './Output.css'

function Output() {
    // const [logs, setLogs] = useState([])
    const { result } = useContext(ThemeContext)
 console.log('Output ', result);

    // useEffect(() => {
    //     const hookedConsole = Hook(
    //         window.console,
    //         (log) => setLogs((currLogs) => [...currLogs, log]),
    //         false
    //     )
    //     return () => Unhook(hookedConsole)
    // }, [])

    return (
        <div className='Output'> 
                {/* <Console  logs={result} variant="dark" /> */}
            {  result.result == "success" ? result.output : 'error'}
            
        </div>
    )
}

export default Output