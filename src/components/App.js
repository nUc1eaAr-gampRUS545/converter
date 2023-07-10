import React from "react";
import { Routes, Route} from "react-router-dom";
import { getLocation } from "../utils/api.js";
import Main from "./Main.js";
import Storage from "./Storage";
function App() {
  const [startValute,setStartValute]=React.useState('');
  const [spisok,setSpisok]=React.useState([])
  
  const result=[];
  for(let i=0;i<100;i++){
    if(localStorage.getItem(`${i}`)!=null){
      let module='';
      module=`${localStorage.getItem(`${i}`)}`;
      result.push(module)

    }}



    function fff(){
      const result=[];
      for(let i=0;i<100;i++){
        if(localStorage.getItem(`${i}`)!=null){
          let module='';
          module=`${localStorage.getItem(`${i}`)}`;
          result.push(module)
  
        }
        setSpisok(result)
      }}
  React.useEffect(()=>{
    getLocation().then((data)=>{
      if(data.country=='Russia'){
        setStartValute('RUB')
      }
    })
      fff();
  },[])
  
  return (
    <div className="page">
      <Routes>
        <Route path='/main' element={<Main  spisok={result} startValute={startValute} setSpisok={setSpisok} />}/>
        <Route path='/' element={<Storage spisok={spisok} />}/>
      </Routes>
    </div>
  );
}

export default App;
