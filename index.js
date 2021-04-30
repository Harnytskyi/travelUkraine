// Start from here

import { regions, getOpenTripMapUrl, getOpenTripMarPlaceUrl } from './utils';

const kinds = [
  'architecture',
  'cultural',
  'historic',
  'industrial_facilities',
  'natural',
  'other',
  'religion',
];

window.dataStore = {
  regionPlaces: [],
  selectedPlaces: [],
  placeToShow: '',
  searchRequest: '',
  availableKinds: [],
  isDataLoading: false,
  error: null,
  placesCash: {},
};

window.regions = regions;
window.selectRegion = selectRegion;
window.selectPlaceToShow = selectPlaceToShow;
window.selectPlaces = selectPlaces;
window.renderApp = renderApp;
window.changeStatus = changeStatus;
window.loadRegionPlaces = loadRegionPlaces;

renderApp();

function renderApp() {
  document.getElementById('app-root').innerHTML = `
    ${App()}
    `;
  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.focus();
    searchInput.selectionStart = searchInput.value.length;
  }
  //else
  //window.addEventListener("load", findSVGElements, false)
}

function findSVGElements() {
  var svg = document.getElementById('mapOfUkraine').contentDocument;
  var svgPolyline = svg.querySelectorAll('polyline');
  for (let i = 0; i < svgPolyline.length; i++) {
    svg.getElementById(svgPolyline[i].id).setAttribute('value', `${regions[i]}`);
    svg.getElementById(svgPolyline[i].id).addEventListener('click', e => {
      window.selectRegion(regions[i]);
    });
  }
}
function App() {
  if (window.dataStore.regionPlaces.length == 0) return `<div>${ShowRegions()}</div>`;
  else {
    return `<div>${showSearchInput()}</div> 
    <div>${showAvailableKinds()}</div>
    <div>${showPlaces()}</div>
    <div>${showPlaceInfo()}</div>`;
  }
}

function ShowRegions() {
  let listOfRegion = [];
  for (let item in regions) {
    listOfRegion.push(`<li><button value="${regions[item]}" onclick="selectRegion(value)" >
            ${regions[item]}
        </button></li>`);
  }
  return listOfRegion.join('');
  //   return `<object
  //   id="mapOfUkraine"
  //   type="image/svg+xml"
  //   data="./src/map-ukraine.svg">
  // </object>`
}

function selectRegion(region) {
  window.dataStore.error = null;
  window.dataStore.isDataLoading = true;
  window
    .loadRegionPlaces(region)
    .then((data, error) => {
      window.dataStore.isDataLoading = false;
      if (error) {
        window.dataStore.error = error;
      } else if (data) {
        data = data.data;
        for (let place in data) {
          window.dataStore.regionPlaces.push({
            xid: data[place].xid,
            name: data[place].name,
            rate: data[place].rate,
            kinds: data[place].kinds.split(','),
          });
        }
        selectAvailableKinds();
        window.dataStore.selectedPlaces = [...window.dataStore.regionPlaces];
      }
    })
    .catch(() => {
      window.dataStore.error = 'some error occurred';
    })
    .finally(window.renderApp);
}
function loadRegionPlaces(region) {
  const url = getOpenTripMapUrl(region);
  return fetch(url)
    .then(response => response.json())
    .then(data => ({ data }));
}
function showSearchInput() {
  return `<input id="search" value="${window.dataStore.searchRequest}" onsearch="window.dataStore.searchRequest = value; selectPlaces()" onkeyup="window.dataStore.searchRequest = value; selectPlaces()" type="search">`;
}
function showPlaces() {
  let listOfPlace = [];
  for (let item in window.dataStore.selectedPlaces) {
    listOfPlace.push(`<li><button value="${window.dataStore.selectedPlaces[item].xid}" onclick="selectPlaceToShow(value)" >
           ${window.dataStore.selectedPlaces[item].name}
        </button></li>`);
  }
  return listOfPlace.join('');
}

function showPlaceInfo() {
  if (window.dataStore.placeToShow == '') return `choose place you like`;
  else {
    const place = window.dataStore.placeToShow;
    return `<img src="${place.preview.source}" alt=""><strong>${place.name}</strong><p>${place.wikipedia_extracts.text}</p>
      <div>GPS: ${place.point.lat}, ${place.point.lon}</div><a href="${place.wikipedia}">See more at Wikipedia</a>`;
  }
}
function loadPlaceInfo(place) {
  const url = getOpenTripMarPlaceUrl(place);
  return fetch(url)
    .then(response => response.json())
    .then(data => ({ data }));
}

function selectAvailableKinds() {
  let availableKinds = [];
  for (let item in window.dataStore.regionPlaces) {
    let kindsOfObject = window.dataStore.regionPlaces[item].kinds;
    availableKinds = availableKinds.concat(
      kindsOfObject.filter(
        item => kinds.some(kind => kind === item) && availableKinds.every(kind => kind != item),
      ),
    );
  }
  for (let kind in availableKinds) {
    window.dataStore.availableKinds[availableKinds[kind]] = true;
  }
}

function selectPlaces() {
  filterByKinds();
  findPlaces();
  renderApp();
}
function findPlaces() {
  let searchRequest = window.dataStore.searchRequest.toUpperCase();
  let searchedPlaces = window.dataStore.selectedPlaces.filter(item =>
    item.name.toUpperCase().includes(searchRequest),
  );
  window.dataStore.selectedPlaces = searchedPlaces;
}
function selectPlaceToShow(place) {
  window.dataStore.error = null;
  window.dataStore.isDataLoading = true;
  loadPlaceInfo(place)
    .then((data, error) => {
      window.dataStore.isDataLoading = false;
      if (error) window.dataStore.error = error;
      else if (data) {
        window.dataStore.placeToShow = data.data;
      }
    })
    .catch(() => {
      window.dataStore.error = 'some error occurred';
    })
    .finally(window.renderApp);
}
function showAvailableKinds() {
  let kindsCheckboxes = Object.keys(window.dataStore.availableKinds).map(
    item =>
      `<label><input type="checkbox" value="${item}" onchange="changeStatus(value)" ${checkstatus(
        item,
      )}>${item}</label>`,
  );
  return kindsCheckboxes.join('');
}
function checkstatus(value) {
  if (window.dataStore.availableKinds[value] == true) return `checked`;
}
function filterByKinds() {
  let selectedKinds = [];
  for (let item in window.dataStore.availableKinds) {
    if (window.dataStore.availableKinds[item] == true) selectedKinds.push(item);
  }
  window.dataStore.selectedPlaces = window.dataStore.regionPlaces.filter(item =>
    item.kinds.some(value => selectedKinds.some(kind => value === kind)),
  );
}
function changeStatus(value) {
  window.dataStore.availableKinds[value] = !window.dataStore.availableKinds[value];
  selectPlaces();
}
