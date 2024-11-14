import { useState, useEffect } from "react";

function Effect(){

    const[state,  setState] = useState(0)
    const[data, setData] = useState(90)

    useEffect(()=>{
        console.log("hello swarnarajs")
    },[state])

    const add=()=>{
        setState(state+1)
    }
    const del=()=>{
        setData(data-1)
    }
    return(
        <>
        {state}
        {data}
        <button onClick={add}>Increment</button>
        <button onClick={del}>decrement</button>
        </>
    )
    
}
export default Effect