import { useState } from "react";
import data from './images.json'

function Search(){
    const[search, setSearch] = useState('')

    return (
        <>
        <br/>
        <input type="text" placeholder="search..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
        {data.filter(city => city.place.toLowerCase().includes(search))
        .map(city=><li>{city.place}</li>)}
        </>
    )
}

export default Search