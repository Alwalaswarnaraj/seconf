import React from 'react'
import { useContext } from 'react'
import { context } from '../App'
export default function CompC() {
    let co = useContext(context)
  return (
    <>
    <div>CompC</div>
    <h1>welcome {co}</h1>
    </>
    
  )
}
