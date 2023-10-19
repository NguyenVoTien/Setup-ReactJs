import { useEffect, useRef, useState } from 'react';

const UseRef = () => {
  const [count, setCount] = useState(60);

  const timeIdRef = useRef();
  const prevCount = useRef();
  const elementRef = useRef();
  // Old number count
  useEffect(() => {
    prevCount.current = count;
  }, [count]);
  //Start count
  const handleCounter = () => {
    timeIdRef.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };

  // stop count

  const handleStop = () => {
    clearInterval(timeIdRef.current);
  };
  //reset counter

  const handleClear = () => {
    clearInterval(timeIdRef.current);
    setCount(60);
  };
  return (
    <>
      <h1 ref={elementRef}>{count}</h1>
      <button onClick={handleCounter}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleClear}>Clear</button>
    </>
  );
};

export default UseRef;
