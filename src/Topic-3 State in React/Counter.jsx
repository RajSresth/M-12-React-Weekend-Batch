import {useState} from 'react'

const Counter = () => {
 const [count,setCount] = useState(0);
 const [count2, setCount2] = useState(0);

    const handleDecrement = () => {
        setCount(count === 0 ? count : count - 1);
    }

    console.log("Counter Component Render");

  return (
    <div id="counter-component">
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>

        <h2>Count2: {count2}</h2>
        <button onClick={() => setCount2(count2 + 10)}>Incr by 10</button>
    </div>
  )
}

export default Counter


// whenever my state variable changes react will re-render the component.


// What is Hook?
// Hook is at the end of the day a normal plain javascript function.