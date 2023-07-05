const apiKey = '8c3b436dd356883d3bb13730382b0a82'

const getLocation = async (city) => {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
  const data = await response.json()
  if (data.length > 0) {
    console.log(data)
    return data
  } else {
    throw 'Invalid City Name'
  }
}

const getWeather = async (lat, lon) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${parseFloat(lat).toFixed(2)}&lon=${parseFloat(lon).toFixed(2)}&appid=${apiKey}`)
  const weatherData = await response.json()
  return weatherData
}
const cityInput = document.querySelector('#cityInput')
const weatherInputBtn = document.querySelector('#weatherInputBtn')

const locationDisplay = document.querySelector('#locationDisplay')
const weatherDisplay = document.querySelector('#weatherDisplay')
const temperatureDisplay = document.querySelector('#temperatureDisplay')
const feelsLikeDisplay = document.querySelector('#feelsLikeDisplay')
const humidityDisplay = document.querySelector('#humidityDisplay')
const minTempDisplay = document.querySelector('#minTempDisplay')
const maxTempDisplay = document.querySelector('#maxTempDisplay')

const parseDataIntoDisplay = (data) => {
  weatherDisplay.innerText = data.weather[0].main
  temperatureDisplay.innerText = `${(data.main.temp - 273).toFixed(2)}°C`
  feelsLikeDisplay.innerText = `Feels Like: ${(data.main.feels_like - 273).toFixed(2)}°C`
  humidityDisplay.innerText = `Humidity: ${data.main.humidity}%`
  minTempDisplay.innerText = `Low: ${(data.main.temp_min - 273).toFixed(2)}°C`
  maxTempDisplay.innerText = `High: ${(data.main.temp_max - 273).toFixed(2)}°C`
}
weatherInputBtn.addEventListener('click', () => {
  const city = cityInput.value
  getLocation(city).then(data => {
    const lat = data[0].lat
    const lon = data[0].lon
    locationDisplay.innerText = `${data[0].name} - ${data[0].country}`
    getWeather(lat, lon).then(data => {
      parseDataIntoDisplay(data)
    })
  }).catch(err => locationDisplay.innerHTML = err)
})