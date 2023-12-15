const countryNames = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo ",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia ",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican",
  "Ecuador",
  "Egypt",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar ",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia ",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Lucia",
  "Samoa",
  "San Marino",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
const countryInput = document.getElementById("country");
const suggestionsList = document.getElementById("suggestions");

countryInput.addEventListener("input", function () {
  const userInput = countryInput.value.trim().toLowerCase();
  const matchingCountries = countryNames.filter((country) =>
    country.toLowerCase().startsWith(userInput)
  );

  suggestionsList.innerHTML = "";

  matchingCountries.forEach((country) => {
    const suggestionItem = document.createElement("li");
    suggestionItem.textContent = country;
    suggestionsList.appendChild(suggestionItem);

    suggestionItem.addEventListener("click", function () {
      countryInput.value = country;
      suggestionsList.innerHTML = ""; // Clear the suggestions after selection
    });
  });
});

let searchBtn = document.getElementById("search-btn");
let country = document.getElementById("country");
// let result = document.getElementById("result");

searchBtn.addEventListener("click", () => {
  let countryName = country.value;

  if (countryName == "Israel") {
    result.innerHTML = `<h3>No Country Found</h3>`;
  } else {
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
      .then((responce) => responce.json())
      .then((data) => {
        console.log(data[0]);
        console.log(data[0].maps.googleMaps);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(
          Object.values(data[0].languages).toString().split(",").join(", ")
        );
        result.innerHTML = `<img src="${data[0].flags.svg}" class="flag-img">
      <h2>${data[0].name.common}</h2>
      <div class="wrapper">
        <div class="data-wrapper">
            <h4>Capital :</h4>
            <span>${data[0].capital[0]}</span>
        </div>
      </div>
      <div class="wrapper">
      <div class="data-wrapper">
          <h4>Continent :</h4>
          <span>${data[0].continents[0]}</span>
      </div>
    </div>
    <div class="wrapper">
      <div class="data-wrapper">
          <h4>Population :</h4>
          <span>${data[0].population}</span>
      </div>
    </div>
    <div class="wrapper">
    <div class="data-wrapper">
        <h4>Currency :</h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - 
        ${Object.keys(data[0].currencies)[0]} (
        ${data[0].currencies[Object.keys(data[0].currencies)].symbol})
      </span>
    </div>
  </div>
  <div class="wrapper">
  <div class="data-wrapper">
      <h4>Common Languages :</h4>
      <span>${Object.values(data[0].languages)
        .toString()
        .split(",")
        .join(", ")}</span>
  </div>
</div>
<div class="wrapper">
  <div class="data-wrapper">

      <h4>See on googleMap :</h4>
      <a href="${data[0].maps.googleMaps}">Go To Map</a>
  </div>
</div>
      `;
      })
      .catch(() => {
        if (countryName.length == 0) {
          result.innerHTML = `<h3>Input feild cannot be empty!</h3>`;
        } else if (countryName === "Palestine") {
          result.innerHTML = `<h3>Palestine holds a special place in my heart, filled with love and affection.</h3>`;
        } else if (countryName === "Israel") {
          result.innerHTML = `<h3>No Country Found</h3>`;
        } else {
          result.innerHTML = `<h3>Enter valid country name!</h3>`;
        }
      });
  }
});
