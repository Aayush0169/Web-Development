import { useState } from "react"


export default function Counter(){
    let [count,setCount]=useState(0);
    let increaseCount=()=>{
        setCount(count+1);
    }
    return<>
    <h2>Count={count}</h2>
    <button onClick={increaseCount}>Click me 😎</button>
    </>
}