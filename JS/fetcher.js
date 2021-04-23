"use strict";

const CLIENT_ID = "EN5DJDGHU5COJS5BSROVHN0DYKHCGRGJ0FSWAJZC3TS0GT5T";
const CLIENT_SECRET = "G3DMO13HLBVPFXHG30S5HGTCTJ3JRWVXUE0CTSY5H0QWJILX";
// URL-Builder
async function getWeather(location) {
  const appid = "144e5f4c986e6ef9be6ff32699597a9e";
  const Weather_api_url = new URL(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}`
  );
  Weather_api_url.searchParams.append("mode", "json");
  Weather_api_url.searchParams.append("appid", appid);
  Weather_api_url.searchParams.append("units", "metric");
  Weather_api_url.searchParams.append("lang", "en");
  try {
    //Fetcher
    const response = await fetch(Weather_api_url);
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (err) {
    console.log(err);
  }
}
// URL-Builder
async function getVenues(location) {
  const Foursquare_api_url = new URL(
    `https://api.foursquare.com/v2/venues/explore?near=${location}`
  );
  Foursquare_api_url.searchParams.append("client_id", CLIENT_ID);
  Foursquare_api_url.searchParams.append("client_secret", CLIENT_SECRET);
  Foursquare_api_url.searchParams.append("v", "20210211");
  Foursquare_api_url.searchParams.append("section", "food");
  Foursquare_api_url.searchParams.append("limit", "3");
  try {
    //Fetcher
    const response = await fetch(Foursquare_api_url);
    const venueData = await response.json();
    console.log(venueData);
    return venueData;
  } catch (err) {
    console.log(err);
  }
}
// When I press Y, do X...
button.addEventListener("click", async () => {
  const city = document.getElementById("city").value;
  const weather = await getWeather(city);
  const venues = await getVenues(city);
  displayData(venues, weather);
});
// Annoying checkboxes that mess my beatiful css up (and hide and show stuff in DOM)
document.getElementById("check1").onchange = function showWeather() {
  if (check1.checked === true) {
    weather.style.display = "block";
    weather.style.alignContent = "initial";
  } else {
    weather.style.display = "none";
    weather.style.alignContent = "initial";
  }
};
// Annoying checkboxes that mess my beatiful css up (and hide and show stuff in DOM)
document.getElementById("check2").onchange = function showVenues() {
  if (check2.checked === true) {
    venues.style.display = "block";
    venues.style.alignContent = "initial";
  } else {
    venues.style.display = "none";
    venues.style.alignContent = "initial";
  }
};
