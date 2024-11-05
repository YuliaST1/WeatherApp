function refreshWeather(response) {
  let cityElement = document.querySelector("#city");

  let temperature = response.data.temperature.current;
  let temperatureElement = document.querySelector("#current-temperature-value");
  let condition = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind");
  let weatherIconElement = document.querySelector("#current-temperature-icon");
  let dateElement = document.querySelector("#date");

  console.log(response.data.time);

  let date = new Date(response.data.time * 1000);
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
  condition.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeed.innerHTML = `${response.data.wind.speed}km/h`;
  weatherIconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="current-temperature-icon"/>`;
  dateElement.innerHTML = currentDate(date);
  console.log(response.data);
}

function currentDate(date) {
  let minutes = date.getMinutes();

  let hours = date.getHours();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "285133f3cbf3e55tdb4456o06a39031a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#search-input-feld");

  searchCity(currentCity.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Paris");
