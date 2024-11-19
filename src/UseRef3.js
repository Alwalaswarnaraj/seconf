import { useState, useRef } from "react";

function UseRef3(){
    const [state, setState] = useState('react')
    const ref = useRef(0)
    const handle=(e)=>{
        setState(e.target.value)
        ref.current = ref.current+1
    }

    return (
        <>
        <h1>React</h1>
        <input input='text' value={state} onChange={handle}/>
        {ref.current}
        </>
    )
}

export default UseRef3