import {useEffect, useState } from "react";

export default function Counter2(){
    let[count,setCount]=useState(0)
    let increaseCount=()=>{
        setCount(count+1);
    }

    useEffect(function showPrint(){
        alert(`Welcome to counter`)
    },
    []
)

    return(
        <div>
            <h3>Count</h3>
            <p>{count}</p>
            <button onClick={increaseCount}>+1</button>
        </div>
    )
}