import React from "react";
import { useState } from "react";
export default function Add() {

    const[state, setState] = useState(0)
    function add(){
        setState(state+1)
    }
  return (
    <>
        {state}
        <button onClick={add}>add</button>
    </>
  )
}
