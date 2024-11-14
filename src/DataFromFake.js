import { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function DataFromFake() {
  const [state, setState] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    //   .then(json => console.log(json))
    .then((json) => setState(json));
  return (
    <>
      <table className="table table-bordered ">
        <tr>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
        </tr>
        {state.map((x)=>
            <tr>
                <td>{x.userId}</td>
                <td>{x.id}</td>
                <td>{x.title}</td>
            </tr>
        )}
      </table>
    </>
  );
}

export default DataFromFake;
