import { useState, useEffect } from "react";

export default function Terminal({ logs }) {
  const [displayLogs, setDisplayLogs] = useState([]);

  useEffect(() => {
    if (logs.length > 0) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayLogs((prev) => [...prev, logs[i]]);
        i++;
        if (i >= logs.length) clearInterval(interval);
      }, 800); // typing speed
    }
  }, [logs]);

  return (
    <div className="terminal">
      {displayLogs.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}
