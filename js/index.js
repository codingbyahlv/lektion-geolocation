const API_TOKEN = 'pk.eyJ1Ijoiam9oYW5raXZpIiwiYSI6ImNrcnl6M25xMDA4aWUyd3BqY3EzYnA1NTEifQ.ve5rEn8ZDwUGKvphMkEdpw';

//hämtar vår knapp
const buttonElem = document.querySelector("#position-button");


//SKAPAR KARTA MED EN MARKER SOM VISAR POSITIONEN
function showOnMap(position) {
  //vi gör en map-box. script inläst i html som ger oss en karta som vi vill läsa in våra koordinater på
  mapboxgl.accessToken = API_TOKEN;
  //skapar ny karta
  const map = new mapboxgl.Map({
    //lägg vår karta i container som har det här id
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    //centrerar efter våra koordinater
    center: [position.coords.longitude, position.coords.latitude],
    zoom: 13
  });

  //vi vill ha en markering på våra koordinater
  //skapar marker
  new mapboxgl.Marker()
    //utifrån våra koordinater
    .setLngLat([position.coords.longitude, position.coords.latitude])
    //och lägger markern på vår karta
    .addTo(map);
};


//VID KLICK PÅ KNAPPEN
buttonElem.addEventListener('click', () => {
  //check för om det stöds i webbläsaren
  //om nav geo stöds kör geo
  if(navigator.geolocation){
    //letar upp location. getCurrent tar en funktion
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      //kallar på vår kart funk
      showOnMap(position)
    });
    
  }
});