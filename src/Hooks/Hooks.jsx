import React, { useState } from 'react';
import { SlLike } from "react-icons/sl";

function Hooks() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <SlLike onClick={() => setCount(count + 1)}/>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default Hooks;
