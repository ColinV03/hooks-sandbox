import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)
    
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
    


    return (
      <div>
        <h1>The Current Number is: {count}</h1>
        <br />
        <button onClick={incrementTwo}> +2</button>
            <button onClick={increment}> +1</button>
        <button onClick={decrement}> -1</button>
        <button onClick={decrementTwo}> -2</button>
      </div>
    );
}


export default Counter  