import { useState, useEffect, useRef } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }
  };

  const handlePause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    //setCounter(0);
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCounter(0);
    setIsRunning(true);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="App">
      <h1>Counter Component</h1>
      <div>
        <span>Time : {counter}</span> <br />
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
