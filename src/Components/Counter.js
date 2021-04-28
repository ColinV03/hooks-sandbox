import React, { useState} from "react";

function Counter() {
  const [count, setCount] = useState(0)
  const [times, setTimes] = useState(0)
  // const [seconds, setSeconds] = useState(0)
 
    
  
  function increment() {
    setCount(count + 1)
    addToTimes();
  }
  
  function incrementTwo() {

    setCount(count + 2)
    addToTimes();
  }
  
  function decrement() {
    setCount(count - 1);
    addToTimes();
  }
  
  function decrementTwo() {
    setCount(count - 2);
    addToTimes();
  }
  
  // function timer() {
  //   setSeconds(seconds + 1)
  // }
  
  
  function addToTimes() {
    setTimes(times + 1);
  }
  
  
  // useEffect(() => {
  //   addToTimes();
  // })

  // useEffect(() => { <h3> Youve been on this page: {seconds}</h3> });

    return (
      <div>
        <h1>The Current Number is: {count}</h1>
        <br />
        <button onClick={incrementTwo}> +2</button>
        <button onClick={increment}> +1</button>
        <button onClick={decrement}> -1</button>
        <button onClick={decrementTwo}> -2</button>

        <h3> You've changed the count: {times === 0 ? 0 : times } times! </h3>
        
      </div>
    );
}


export default Counter  