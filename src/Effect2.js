import { useState, useEffect } from "react";

function Effect2(){
    const[state, setState] = useState([])

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=50')
        .then((res)=>res.json)
        .then((json)=>setState(json.result))
    })

    return(
        <>
        <h1>hello</h1>
        {/* {state.map((list)=><li>{list}</li>)} */}
        </>
    )
}

export default Effect2