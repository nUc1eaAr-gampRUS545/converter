import React from 'react';
import { getValutes } from '../utils/api.js';
import BasicSelect from './Select.js';

function App() {
const [flag,setFlag]=React.useState(null)
const [usd,setUSD]=React.useState();
const [eur,setEuro]=React.useState();
const [yun,setYuan]=React.useState();
const rates={
  RUB:1,USD:usd,EUR:eur,YUN:yun
}
const [dataInput,setDataInput]=React.useState(1000);
const [fromValute,setFromValute]=React.useState('RUB');
const [toValute,setToValute]=React.useState('USD');

function handleChangeParametr(){
  const country=fromValute;
  setDataInput(toResult);
  setFromValute(toValute);
  setToValute(country);
  setFlag(false);
}

function handleToValute(data){
   setToValute(data)
}
function handleFromValute(data){
  setFromValute(data)
}
function handleInputValue(data){
  setDataInput(data)
}


React.useEffect(()=>{
  getValutes().then((json) => {
    setUSD(json.wap_rates.data[0][4]);
    setEuro(json.wap_rates.data[1][4]);
    setYuan(json.wap_rates.data[2][4]);})
.catch((error) => {
    console.error(error);})
},[])
const fromMoney=rates[fromValute];
const toMoney=rates[toValute];
const toResult=dataInput*rates[fromValute]/rates[toValute];
  return (
    <div className="App">
      <div className='App__container'>
      <div className='App__container__box__title'>У меня есть</div>
        <div className='App__container__box'>
          
       <BasicSelect handleValute={handleFromValute} currency={flag ? toValute : fromValute} />
       <input type='number' className='inputChange' value={dataInput.toFixed(2)} onChange={(e)=>{handleInputValue(e.target.value)}}/>
       <div className='valute'>{`1 ${fromValute} = ${(fromMoney/ rates[toValute]).toFixed(2)} ${toValute} `}</div>
        </div></div>
        <button className='App__container__button' onClick={handleChangeParametr}/>
        <div className='App__container'>
        <div className='App__container__box__title'>Я получу</div>
        <div className='App__container__box'>
        
        <BasicSelect handleValute={handleToValute} currency={flag ? fromValute : toValute} />
        <div className='App__container__box__result'>{toResult.toFixed(2)}</div>
        <div className='valute'>{`1 ${toValute} = ${(toMoney/ rates[fromValute]).toFixed(2)} ${fromValute} `}</div></div>
        </div>
        
      
    </div>
  );
}

export default App;
