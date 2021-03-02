const countriesList = document.getElementById("countries-list");
const filter = document.getElementById("filter");
const selectedCountries = document.getElementById("selected-countries");

let countries;

//const API_KEY = '32773c0d6d8c42119ea36d4bb6787a4c';

async function getCountries() {
    let resp = await fetch("https://restcountries.eu/rest/v2/all");
    let data = await resp.json();

    return data;
}
async function getWeather(country) {
    let resp = await fetch("http://api.weatherstack.com/current?access_key=32773c0d6d8c42119ea36d4bb6787a4c&query=" + country);
    let data = await resp.json();
    return data;
}

getCountries().then(
    data => {
        countries = data;
        drawList(countries)
    }
)

function drawList(countries) {
    countriesList.innerHTML = '';
    if (countries.length < 10) {
        countries.forEach(country => {
            //country.name -> nombre del pais
            let li = document.createElement("li");
            li.innerText = country.name;
            countriesList.appendChild(li)
            li.addEventListener('click', () => { selectCountry(country) })
        })
    } else {
        countriesList.innerHTML = '<strong>Filtre la lista</strong>';
    }

}

filter.addEventListener('keyup', () => {
    console.log(filter.value)
    // input: ar - res: argentina - armenia -  Argelina
    let result = countries.filter(country => country.name.toLowerCase().includes(filter.value));
    drawList(result);
})

function selectCountry(country) {
    div = document.createElement('div');

    //weather.current.temperature - weather.current.weather_icons[0] - weather.location.name/region
    getWeather(country.name).then(
        weather => {
            div.innerHTML = `
            <div class="card">
                <h3>${country.name} <a class="fav"> Fav </a> </h3>
                <h5>${country.region}</h5>
                <div class="clima">
                    <img src="${weather.current.weather_icons[0]}" alt="weather-icon"/>
                    <p> El clima en ${weather.location.name}, ${weather.location.region} es <strong> ${weather.current.temperature} °C </strong></p>
                </div>
            </div>
            `;

            selectedCountries.appendChild(div);

            let favs = document.getElementsByClassName("fav");
            Array.from(favs).forEach(
                (fav, i) => {
                console.log(i)
                fav.addEventListener('click', addFavorite)
            })
        }
    )


    
}

let favs;

function addFavorite(event) {

    let country = {
        name: event.target.previousSibling.textContent,
        region: event.target.parentNode.nextElementSibling.textContent
    }
    
    console.log(event)

    favs = JSON.parse(localStorage.getItem("favs"));
    
    if(favs == null) favs = []
    favs.push(country);

    localStorage.setItem("favs", JSON.stringify(favs));

}

