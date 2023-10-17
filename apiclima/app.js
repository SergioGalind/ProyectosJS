const ApiKey = 'd814b7b041cf2b7e16548b4a7038e34a';
const UrlBase = 'https://api.openweathermap.org/data/2.5/weather';

const btnCity = document.querySelector('#btnCity');
const inputCity = document.querySelector('#city');

const fetchapi = url => fetch(url).then(response => response.json());

async function getClima(lat, lon, apiKey){
    const url = `${ UrlBase }?lat=${ lat }&lon=${ lon }&appid=${ apiKey }`;
    const clima = await fetchapi(url);
    const temperature = (clima.main.temp -273.15).toFixed(2);
    document.querySelector('h2').innerHTML = temperature +'°C - '+ clima.name;
    pintaFondo(temperature);
}

async function getClimaByCity(city, apiKey){
    const url = `${ UrlBase }?q=${ city }&appid=${ apiKey }`;
    const clima = await fetchapi(url);
    const temperature = (clima.main.temp -273.15).toFixed(2);
    document.querySelector('h2').innerHTML = temperature +'°C - '+ clima.name;
    pintaFondo(temperature);
    pintaEmoji(temperature);
}

function pintaFondo(temp){
    const fondo = document.querySelector('body');
    if(temp < 13){
        fondo.style.background = '#4682B4'; //azul
    } else if(temp < 22){
        fondo.style.background = '#FFFF00'; //amarillo0
    } else {
        fondo.style.background = '#FF6347';//rojo y naranja

    }

}

function pintaEmoji(temp){
    const emo = document.querySelector('#emoji');
    if(temp< 13){
        emo.innerHTML = '🥶🥶🥶';
    }
    if(temp< 22){
        emo.innerHTML = '🍻🍺🥤';
    }

    else{
        emo.innerHTML ='🥵🥵🥵';
    }
}

//obtener geolocalizacion
navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getClima(lat, lon, ApiKey);
  });
  
function buttonAction(){
    const city = inputCity.value;
    if(city){
        getClimaByCity(city, ApiKey);
    }
}

btnCity.addEventListener('click', buttonAction);