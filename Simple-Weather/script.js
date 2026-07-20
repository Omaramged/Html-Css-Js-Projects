var searchBtn = document.getElementById("searchBtn");
var cityInput = document.getElementById("cityInput");
var resultBox = document.getElementById("resultBox");
var cityName = document.getElementById("cityName");
var weatherText = document.getElementById("weatherText");
var tempText = document.getElementById("tempText");
var windText = document.getElementById("windText");
var humidityText = document.getElementById("humidityText");
var dailyText = document.getElementById("dailyText");
var errorBox = document.getElementById("errorBox");
function getWeatherA() {
  errorBox.innerText = "";
  resultBox.style.display = "none";
  var a = cityInput.value;
  if (!a) {
    errorBox.innerText = "Please enter a city name";
    return;
  }
  var b =
    "https://geocoding-api.open-meteo.com/v1/search?name=" +
    encodeURIComponent(a);
  fetch(b)
    .then(function (response) {
      return response.json();
    })
    .then(function (data1) {
      if (!data1 || !data1.results || data1.results.length === 0) {
        errorBox.innerText = "City not found";
        return;
      }
      var x = data1.results[0];
      var y = x.latitude;
      var z = x.longitude;
      var city = x.name;
      if (x.admin1) {
        city = city + ", " + x.admin1;
      }
      var c =
        "https://api.open-meteo.com/v1/forecast?latitude=" +
        y +
        "&longitude=" +
        z +
        "&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto";
      fetch(c)
        .then(function (response2) {
          return response2.json();
        })
        .then(function (data2) {
          if (!data2 || !data2.current_weather) {
            errorBox.innerText = "Weather data not found";
            return;
          }
          var d = data2.current_weather;
          cityName.innerText = city;
          var weather = "Weather: " + d.weathercode;
          if (d.weathercode === 0) {
            weather = "Weather: Clear sky";
          }
          if (
            d.weathercode === 1 ||
            d.weathercode === 2 ||
            d.weathercode === 3
          ) {
            weather = "Weather: Partly cloudy";
          }
          if (d.weathercode === 45 || d.weathercode === 48) {
            weather = "Weather: Fog";
          }
          if (
            d.weathercode === 51 ||
            d.weathercode === 53 ||
            d.weathercode === 55
          ) {
            weather = "Weather: Drizzle";
          }
          if (
            d.weathercode === 61 ||
            d.weathercode === 63 ||
            d.weathercode === 65
          ) {
            weather = "Weather: Rain";
          }
          if (
            d.weathercode === 71 ||
            d.weathercode === 73 ||
            d.weathercode === 75
          ) {
            weather = "Weather: Snow";
          }
          if (
            d.weathercode === 80 ||
            d.weathercode === 81 ||
            d.weathercode === 82
          ) {
            weather = "Weather: Rain showers";
          }
          if (
            d.weathercode === 95 ||
            d.weathercode === 96 ||
            d.weathercode === 99
          ) {
            weather = "Weather: Thunderstorm";
          }
          weatherText.innerText = weather;
          tempText.innerText = "Temperature: " + d.temperature + "°C";
          windText.innerText = "Wind speed: " + d.windspeed + " km/h";
          humidityText.innerText = "Humidity info not available from this API";
          var daily = data2.daily;
          if (
            daily &&
            daily.time &&
            daily.temperature_2m_max &&
            daily.temperature_2m_min
          ) {
            var s = "Daily forecast:\n";
            for (var i = 0; i < 3; i++) {
              if (daily.time[i]) {
                s +=
                  daily.time[i] +
                  ": " +
                  daily.temperature_2m_min[i] +
                  "°C / " +
                  daily.temperature_2m_max[i] +
                  "°C";
                if (i < 2) {
                  s += "\n";
                }
              }
            }
            dailyText.innerText = s;
          } else {
            dailyText.innerText = "";
          }
          resultBox.style.display = "block";
        })
        .catch(function (e2) {
          errorBox.innerText = "Error while getting weather";
        });
    })
    .catch(function (e1) {
      errorBox.innerText = "Error while finding city";
    });
}
searchBtn.addEventListener("click", function () {
  getWeatherA();
});
cityInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    getWeatherA();
  }
});
