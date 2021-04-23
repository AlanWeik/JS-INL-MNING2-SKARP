"use strict";
// Assigning variables to my HTML-elements
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
let desc = document.querySelector("#desc");

let venueName1 = document.querySelector("#venueName1");
let venueName2 = document.querySelector("#venueName2");
let venueName3 = document.querySelector("#venueName3");

let adress1 = document.querySelector("#adress1");
let adress2 = document.querySelector("#adress2");
let adress3 = document.querySelector("#adress3");

const submit = document.querySelector("#button");
const city = document.getElementById("city").value;

// Take the data from the fetch and fill my HTML/DOM up pls.
function displayData(foursquareData, weatherData) {
  try {
    venueName1.innerHTML =
      foursquareData.response.groups[0].items[0].venue.name;
    venueName2.innerHTML =
      foursquareData.response.groups[0].items[1].venue.name;
    venueName3.innerHTML =
      foursquareData.response.groups[0].items[2].venue.name;

    adress1.innerHTML =
      foursquareData.response.groups[0].items[0].venue.location.address;
    adress2.innerHTML =
      foursquareData.response.groups[0].items[1].venue.location.address;
    adress3.innerHTML =
      foursquareData.response.groups[0].items[2].venue.location.address;

    sectionTitle.innerHTML = `${weatherData.name} Attractions`;
    destination.innerHTML = `${weatherData.name}, ${weatherData.sys.country}`;
    temp.innerHTML = `Temperature: ${weatherData.main.temp}`;
    desc.innerHTML = `Condition: ${weatherData.weather[0].main}`;
    wind.innerHTML = `Wind: ${weatherData.wind.speed}`;
  } catch {
    alert("Something went wrong, try again or choose another city.");
  }
}
