import React from "react";
import { Routes, Route} from "react-router-dom";
import Main from "./Main.js";
import Storage from "./Storage";
function App() {
  const spisok=[];
  
   for (let i = 0; i < 100; i++) {
    if(localStorage.getItem(`${i}`)!=null){
      let module='';
      module=`${localStorage.getItem(`${i}`)}`
      spisok.push(module);
    }}
    
  return (
    <div className="page">
      <Routes>
        <Route path='/' element={<Main  spisok={spisok}/>}/>
        <Route path='/storage' element={<Storage spisok={spisok} />}/>
      </Routes>
    </div>
  );
}

export default App;
