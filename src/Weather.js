import { useState } from "react";

function Weather(){
    const[state,setState] = useState()

    fetch("https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=a451259c18cfd80cfaecc8b83b0b4e1f")
    .then((response)=>response.json())
    .then((json)=>setState(json.main.temp))

    return(
        <>
        {state}
        </>
    )
}

export default Weather