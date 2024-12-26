import { useState, useEffect, useContext } from 'react'
import { Console, Hook, Unhook } from 'console-feed'
import ThemeContext from './MyContext';


function Output() {
    // const [logs, setLogs] = useState([])
    const {result } = useContext(ThemeContext)

    // useEffect(() => {
    //     const hookedConsole = Hook(
    //         window.console,
    //         (log) => setLogs((currLogs) => [...currLogs, log]),
    //         false
    //     )
    //     return () => Unhook(hookedConsole)
    // }, [])

    return (
        <div>
            <Console  logs={result} variant="dark" />
        </div>
    )
}

export default Output