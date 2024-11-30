const apiKey = "23d9a0f4363a1ae0945c7a3cc4dc6d79";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    try {

        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        
        if (!response.ok) {
            throw new Error("Cidade não encontrada! Verifique a ortografia.");
        }

        const data = await response.json();

        console.log(data);

        // Atualiza os valores
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // Altera o ícone
        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png";
        } else {
            weatherIcon.src = "images/default.png"; // Ícone padrão
        }
    } catch (error) {
        console.error(error.message);
        alert(error.message);
    }
}

//  Busca
searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Por favor, insira o nome de uma cidade.");
    }
});

searchBox.addEventListener("keydown", () => {
    if (event.key === "Enter"){
        const city = searchBox.value.trim();
        if (city) {
            checkWeather(city);
        } else {
            alert("Por favor, insira o nome de uma cidade.");
        }
    }
});


checkWeather("Brasil")
