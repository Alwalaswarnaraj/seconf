import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import data from "./images.json";

function Cards() {
  const [state, setState] = useState(data);
  return <>
    <div className="container">
        <div className="row">
            {state.map((list)=>
            <div className="col-md-4">
                <div className="card">
                    <img src={list.pic} className="card-img-top"></img>
                    <div className="card-body">
                        <h5 className="card-title">{list.place}</h5>
                    </div>
                </div>
            </div>
            )}
        </div>
    </div>
  </>;
}

export default Cards