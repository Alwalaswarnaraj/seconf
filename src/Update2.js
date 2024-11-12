import React, { useState } from 'react'


function Update2(){
    const[user, setUser] = useState({fname:'swarnaraj', lname:'alwala'})
    const uda = ()=>{
        setUser({...user, fname:'raj'})
    }
    
    return (
        <>
        <h1>hello</h1>
        <h2>{user.fname} {user.lname}</h2>
        <button onClick={uda}>update</button>
        </>
        
    )
}

export default Update2