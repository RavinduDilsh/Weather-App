const apiKey = "7983c6257b9440cdd9f6b1992db604f5"

const city = document.getElementById("city");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const searchTxt = document.getElementById("searchTxt");
const searchBtn = document.getElementById("searchBtn");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");

async function checkWeather() {
    text = searchTxt.value;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${text}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(data)

    city.innerHTML = data.name;
    temp.innerHTML = data.main.temp + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "icons/clouds.png";
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "icons/clear.png";
    } else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "icons/rain.png";
    } else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "icons/drizzle.png";
    } else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "icons/snow.png";
    } else {
        weatherIcon.src = "icons/mist.png";
    }
    
    weather.style.display = "block";

}

searchBtn.addEventListener("click", () => {
    checkWeather();
})

searchTxt.addEventListener('keyup', (e)=>{
    if(e.keyCode === 13){
        checkWeather();
    }
})
