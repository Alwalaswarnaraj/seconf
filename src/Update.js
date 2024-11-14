import React from 'react'
import {useState} from 'react'

export default function Update(){
    
    const person={
        fname: 'swarnraj',
        lname:'alwala'
    }
    
    const person1={
        fname:"sandeep",
        lname:"parsa"
    }

    const[user, setUser] = useState(person)
    const updateUser=()=>{
        setUser(person1)
    }   
    return(
        <>
         <h1>hello</h1>
         <h2>{user.fname} {user.lname}</h2>
         <button onClick={updateUser}>update</button>
        </>
       
    )
}