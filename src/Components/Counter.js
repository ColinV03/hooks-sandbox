import React, { useState,useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0)
  const [times, setTimes] = useState(0)
 
    
    function increment() {
        setCount(count +1)
    }
    function incrementTwo() {
        setCount(count + 2)
    }

    function decrement() {
      setCount(count - 1);
    }
    function decrementTwo() {
      setCount(count - 2);
  }
  function addToTimes() {
    setTimes(times + 1);
  }
    
  
  
  useEffect(addToTimes, [count])


    return (
      <div>
        <h1>The Current Number is: {count}</h1>
        <br />
        <button onClick={incrementTwo}> +2</button>
        <button onClick={increment}> +1</button>
        <button onClick={decrement}> -1</button>
        <button onClick={decrementTwo}> -2</button>

        <h3> You've changed the count: {times -1} times! </h3>
      </div>
    );
}


export default Counter  