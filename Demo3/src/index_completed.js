// RxJS v6+
import { fromEvent } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';

const apiUrl = 'http://localhost:3000/countries'
const loadButton = document.getElementById('load-country')
const countryDisplay = document.getElementById('country-display')
const searchBox = document.getElementById('country-search')
const loading = document.getElementById('loading')

function showLoading () {
  while (countryDisplay.hasChildNodes()) {
    countryDisplay.removeChild(countryDisplay.lastChild);
  }
  // const loading = document.createElement('p')
  loading.style.display = 'block'
  loading.textContent = 'Loading...'
  countryDisplay.appendChild(loading)
}

function showCountryData (data) {
  loading.style.display = 'none';
  const title = document.createElement('h2')
  title.textContent = data.country
  const populationData = document.createElement('p')
  const populationLabel = document.createElement('strong')
  const populationValue = document.createTextNode(data.population)
  populationLabel.textContent = 'Population: '
  populationData.appendChild(populationLabel)
  populationData.appendChild(populationValue)
  countryDisplay.appendChild(title)
  countryDisplay.appendChild(populationData)
}

fromEvent(loadButton, 'click')
.pipe(
  tap(showLoading),
  map(e => searchBox.value),
  map(v => apiUrl + '/' + v),
  switchMap(url => fetch(url).then(resp => resp.json()))
)
.subscribe(showCountryData)
