import React from 'react';

function App() {
    const[count,setCount] = (0);
    function increment() {
       setCount(count+1);
    }

    function decrement() {
        setCount(count-1);
    }
    return (
        <>
            <h1>Counter</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}