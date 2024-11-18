import { useState } from "react";
import'../node_modules/bootstrap/dist/css/bootstrap.css'

function ControlledComp(){
    const[state, setState] = useState("swarnara")
    const handler =(name)=>{
        setState(name.target.value)
    }
    return(
        <>
        <h2><span className="text-success">{state}</span></h2>
        <input type="text" value={state} onChange={handler}></input>
        <select onChange={handler}>
            <option>java</option>
            <option>JavaScript</option>
            <option>React</option>
            <option>Rust</option>
            <option>Linux</option>
        </select>
        </>
    )
}

export default ControlledComp