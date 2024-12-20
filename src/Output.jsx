import { useState, useEffect } from 'react'
import { Console, Hook, Unhook } from 'console-feed'

function Output() {
    const [logs, setLogs] = useState([])

    useEffect(() => {
        const hookedConsole = Hook(
          window.console,
          (log) => setLogs((currLogs) => [...currLogs, log]),
          false
        )
        return () => Unhook(hookedConsole)
      }, [])

    return (
        <div>
             <Console logs={logs} variant="dark" />
        
        </div>
    )
}

export default Output