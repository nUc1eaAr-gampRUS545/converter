const checkResponse=(res)=> {
    if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}
export function getValutes(){
return(
  fetch('https://iss.moex.com/iss/statistics/engines/currency/markets/selt/rates.json?iss.meta=off')
  .then(checkResponse))
}
 
export function getLocation(){
  return(
    fetch('https://ipwho.is/')
    .then(checkResponse))
  }

