import { useState, useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './style.css'

function Effect3() {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setState(json));
  });

  return(
    <>
    <div className='container'>
        <div className="row">
            {state.map((list)=><div className="col-md-3">
                <div className="card">
                    <img src={list.image} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{list.title}</h5>
                        <h6 className="card-title">price: {list.price}</h6>
                        <p className="card-description">{list.description}</p>
                    </div>
                </div>
            </div>)}
        </div>
    </div>
    </>
  );
}

export default Effect3;
