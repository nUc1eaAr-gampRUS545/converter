import React from "react";
import { getValutes } from "../utils/api.js";
import BasicSelect from "./Select.js";

function App() {
  const [flag, setFlag] = React.useState(null);
  const [usd, setUSD] = React.useState();
  const [eur, setEuro] = React.useState();
  const [yun, setYuan] = React.useState();
  const rates = {
    RUB: 1,
    USD: usd,
    EUR: eur,
    YUN: yun,
  };
  const [dataInput, setDataInput] = React.useState(1000);
  const [fromValute, setFromValute] = React.useState("RUB");
  const [toValute, setToValute] = React.useState("USD");


  const [deg,setDeg]=React.useState(180)
  function handleChangeParametr() {
    const country = fromValute;
    setDeg(deg+90);
    document.querySelector('.app__container__button').style.rotate=`${deg}deg`;
    setDataInput(toResult);
    setFromValute(toValute);
    setToValute(country);
    setFlag(false);
    
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
  function getFromResult(){
    const result=`1 ${fromValute} = ${(
      fromMoney / rates[toValute]
    ).toFixed(2)} ${toValute} `
    return result;
  }
  function getToResult(){
    const result=`1 ${toValute} = ${(
      toMoney / rates[fromValute]
    ).toFixed(2)} ${fromValute} `
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
  const fromMoney = rates[fromValute];
  const toMoney = rates[toValute];
  const toResult = (dataInput * rates[fromValute]) / rates[toValute];

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__container__box__title">У меня есть</div>
        <div className="app__container__box">
          <BasicSelect
            handleValute={handleFromValute}
            currency={flag ? toValute : fromValute}
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
            currency={flag ? fromValute : toValute}
          />
          <div className="app__container__box__result">
            {toResult.toFixed(2)}
          </div>
          <div className="app__container__box__valute">{getToResult()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
