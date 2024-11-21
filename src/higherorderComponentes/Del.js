import React, { useState } from 'react'

export default function Del() {
    const[state, setState] = useState(100)
    function del(){
        setState(state - 1)
    }
  return (
    <>
    {state}
    <button onClick={del}>del</button>
    </>
  )
}
