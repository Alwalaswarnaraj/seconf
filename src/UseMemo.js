import { useState,  useMemo } from "react"

function UseMemo(){
    const[add,  setAdd] = useState(0)
    const[del, setDel] = useState(100)

    const delfun =()=>{
        setDel(del-1)
    }
    const addfun = ()=>{
        setAdd(add+1)
    }
    // const mul=()=>{
    //     return add*5
    // }

    const multiply=useMemo(function mul(){
        return add*5
    },[add])

    return (
        <>
            <h3>{add}</h3>
            <h3>{del}</h3>
            <button onClick={addfun}>add</button>
            <button onClick={delfun}>del</button>
            <h3>{multiply}</h3>
        </>
    )
}

export default UseMemo