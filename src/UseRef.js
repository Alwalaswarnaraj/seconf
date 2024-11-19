import { useRef, useState} from 'react'

function UseRef(){
    const[state , setState] = useState(90)
    let ref = useRef()
    console.log(ref)

const handleClick =()=>{
    ref.current.style.color="red"
    ref.current.style.background="yellow"
    ref = setState('hello')
}
    return(
<>
 {/* <h3>{ref.current}</h3> */}
<input type="text" ref={ref.current}/>
        <button onClick={handleClick}>fo</button>

</>
    );
}

export default UseRef