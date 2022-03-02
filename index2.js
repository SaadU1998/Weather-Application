// Dom Manipulation

const searchCity = document.querySelector(".search");
const searchButton = document.querySelector("button");


searchCity.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = searchCity.city.value.trim();
  searchCity.reset();

  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => alert("Typing error"));
})

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const city = searchCity.city.value.trim();
  searchCity.reset();

  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
})

const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weather = await getCondition(cityDetails.Key);
  
    return { cityDetails, weather };
  };


//   UI updating

const weatherInfo = document.querySelector(".weather");



const updateUI = (data) => {
  const cityDetails = data.cityDetails;
  const weather = data.weather;
  console.log(cityDetails, weather);

  weatherInfo.innerHTML = `<h2 class="city">Weather in ${cityDetails.EnglishName}</h2>
        <h1 class="temp">${weather.Temperature.Metric.Value}&deg;C</h1>
        <img src="icons/${weather.WeatherIcon}.svg" alt="" class="icon bg-white " />
        <div class="description mt-2">${weather.WeatherText}</div>
        <div class="Region">Region: ${cityDetails.Region.EnglishName}</div>
        <div class="Time">Occasion: ${weather.LocalObservationDateTime}</div>
      </div>`;


 };

