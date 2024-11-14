import img from "./image1.jpg";
import img2 from "./image2.jpg";
import { useState } from "react";
import "./style.css";

function Imageupdate() {
  const [image, setImage] = useState(img);
  let change = () => {
    if (image === img) {
      setImage(img2);
    } else {
      setImage(img);
    }
  };

  return (
    <>
      <br />
      <img src={image}></img>
      <br/>
      <button onClick={change}>change</button>
    </>
  );
}

export default Imageupdate;
