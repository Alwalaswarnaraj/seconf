import { useState } from "react";

function Map(){
    const array = ['swarnaraj','sandeep','sai','hari']
    const[state, setState] = useState(array)

    return(
        <>
        {state.map((x)=><ol>{x}</ol>)}
        </>
    )
}

export default Map