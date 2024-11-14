import { useState } from 'react'
import data from './data.json'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function Json(){
    const [state,setState] = useState(data)

    return(
        <>
        {state.map((x)=><div>{x.name}</div>)}   

        <table className=' table table-bordered table-primary'>
            <tr>
                <th>Name</th>
                <th>age</th>
                <th>place</th>
            </tr>
            {state.map((x)=>
                <tr>
                    <td>{x.name}</td>
                    <td>{x.age}</td>
                    <td>{x.place}</td>
                </tr>
            )}
        </table>
        </>
    )
}

export default Json