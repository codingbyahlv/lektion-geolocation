const API_TOKEN = 'pk.eyJ1Ijoiam9oYW5raXZpIiwiYSI6ImNrcnl6M25xMDA4aWUyd3BqY3EzYnA1NTEifQ.ve5rEn8ZDwUGKvphMkEdpw';

//hämtar vår knapp
const buttonElem = document.querySelector("#position-button");

//vid klick på knappen
buttonElem.addEventListener('click', () => {
  //check för om det stöds i webbläsaren
  //om nav geo finns kör geo
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition();
    console.log(position)
  }
});