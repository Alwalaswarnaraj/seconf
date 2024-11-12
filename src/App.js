import React from'react'
import {useState} from 'react'
import Update from './Update'
import Update2 from './Update2'

export default function App(){
    let[user, setUser] = useState('swrna')
    return(
        <>
        <h1>{user}</h1>
        <Update/>
        <Update2/>
        </>
    )
}