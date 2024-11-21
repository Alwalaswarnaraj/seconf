import React from 'react'

export default function Hoc(props) {
  return (
    <>
    <h1 style={{color:'red', background:'green'}}><props.x/></h1>
    </>
  )
}
