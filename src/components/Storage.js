import React from "react";
import Container from "./Container.js";
import {useNavigate} from "react-router-dom";
export default function Storage({ spisok }) {
const navigate=useNavigate();

  return (<div className="storage" >
  <button className="storge__button-home" onClick={()=>{navigate('/main')}}></button>
  <ul className="storage__container">
    {spisok.map((i)=>(
        <Container element={i} key={i}/>
    ))}
      </ul></div>)
    
  

  
}
