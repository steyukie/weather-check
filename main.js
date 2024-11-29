const apiKey = "23d9a0f4363a1ae0945c7a3cc4dc6d79";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=brazil";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data)
}