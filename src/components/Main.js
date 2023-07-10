import React from "react";
import { getValutes } from "../utils/api.js";
import { useNavigate} from "react-router-dom";
import BasicSelect from "./Select.js";


function Main({spisok,startValute,setSpisok}) {
  const massivCounter=[];
  const massivReverse=spisok;


  
  
  
  if(massivReverse[0] != undefined){
    var startToValute=`${massivReverse[spisok.length - 1].substring(2,5)}`;
    var startFromValute=`${massivReverse[spisok.length - 1].slice(13).replace(/\s/g, '')}`;
  }
  else{
    var startFromValute=startValute;
    var startToValute='USD'
  }
    
  const [fromState, setFromState] = React.useState(startFromValute);
  const [toState, setToState] = React.useState(startToValute);
  const [dataInput, setDataInput] = React.useState(1000);
  const [fromValute, setFromValute] = React.useState(startFromValute);
  const [toValute, setToValute] = React.useState(startToValute);
  const [deg, setDeg] = React.useState(180);
  const [usd, setUSD] = React.useState();
  const [eur, setEuro] = React.useState();
  const [yun, setYuan] = React.useState();
  const navigate=useNavigate();
  
 
  const rates = {
    RUB: 1,
    USD: usd,
    EUR: eur,
    YUN: yun,
  };

  function addToTheBest() {
    setCounter(counter + 1);
    const result = `1 ${toValute} = ${(toMoney / rates[fromValute]).toFixed(2)} ${fromValute} `;
    localStorage.setItem(`${counter}`, result);
    setSpisok(value=>[...value,result])
  }
  function handleChangeParametr() {
    
    const country = fromValute;
    setDeg(deg + 90);
    document.querySelector(
      ".app__container__button"
    ).style.rotate = `${deg}deg`;
    setDataInput(toResult);
    setFromValute(toValute);
    setToValute(country);
    let storage = fromState;
    setFromState(toState);
    setToState(storage);
  }
  function handleFromState(data) {
    setFromState(data);
  }
  function handleToState(data) {
    setToState(data);
  }
  function handleToValute(data) {
    setToValute(data);
  }
  function handleFromValute(data) {
    setFromValute(data);
  }
  function handleInputValue(data) {
    setDataInput(data);
  }
  function getFromResult() {
    const result = `1 ${fromValute} = ${(fromMoney / rates[toValute]).toFixed(
      2
    )} ${toValute} `;
    return result;
  }

  function getToResult() {
    const result = `1 ${toValute} = ${(toMoney / rates[fromValute]).toFixed(
      2
    )} ${fromValute} `;
    return result;
  }
  
  React.useEffect(() => { 
    getValutes()
      .then((json) => {
        setUSD(json.wap_rates.data[0][4]);
        setEuro(json.wap_rates.data[1][4]);
        setYuan(json.wap_rates.data[2][4]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  
   for (let i = 0; i < 100; i++) {
    if(localStorage.getItem(`${i}`)!=null){
        massivCounter.push(i);
    }
   }
  
  const [counter, setCounter] = React.useState(massivCounter.length);
  const fromMoney = rates[fromValute];
  const toMoney = rates[toValute];
  const toResult = (dataInput * rates[fromValute]) / rates[toValute];
  function goToFavorite(){
    navigate('/')
  }
  return (
    <>
      <div className="app">
        <div className="app__container">
          <div className="app__container__box__title">У меня есть</div>
          <div className="app__container__box">
            <BasicSelect
              handleValute={handleFromValute}
              state={fromState}
              handleState={handleFromState}
            />
            <input
              type="number"
              className="app__container__box__input"
              value={dataInput}
              onChange={(e) => {
                handleInputValue(e.target.value);
              }}
            />
            <div className="app__container__box__valute">{getFromResult()}</div>
          </div>
        </div>
        <button
          className="app__container__button"
          onClick={handleChangeParametr}
        />
        <div className="app__container">
          <div className="app__container__box__title">Я получу</div>
          <div className="app__container__box">
            <BasicSelect
              handleValute={handleToValute}
              state={toState}
              handleState={handleToState}
            />
            <div className="app__container__box__result">
              {toResult.toFixed(2)}
            </div>
            <div className="app__container__box__valute">{getToResult()}</div>
          </div>
        </div>
      </div>
      <div className="blockButton">
      <button onClick={addToTheBest} className="app__saved">
        Отправить
      </button>
      <button onClick={goToFavorite} className="app__navigate">
        Посмотреть избранное
      </button>
      </div>
    </>
  );
}

export default Main;
