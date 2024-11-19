import { useState,useEffect } from "react";

function UseRef2(){
    const [state, setState] = useState('react')
    const[num, setNum] = useState(0)

    const handle=(e)=>{
        setState(e.target.value)
    }

    useEffect(()=>{
        setNum(num+1)
    })

    return(
        <>
            <h1>react</h1>
            <input tyle='text' value={state} onChange={handle}/>
            {num}
        </>
    )
}

export default UseRef2