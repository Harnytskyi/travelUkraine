// Start from here

import dataStore from './data/dataStore';
import mapOfUkraine from './map-ukraine.svg';
import styles from './style.css';
import { regions } from './data/openTripMapAPI';
import { loadRegionPlaces, loadPlaceInfo } from './data/regionData';
import { kinds } from './utils';

window.dataStore = dataStore;

window.regions = regions;
window.selectRegion = selectRegion;
window.selectPlaceToShow = selectPlaceToShow;
window.selectPlaces = selectPlaces;
window.renderApp = renderApp;
window.changeStatus = changeStatus;
window.loadRegionPlaces = loadRegionPlaces;

renderApp();

function renderApp() {
  const appRoot = document.getElementById('app-root');
  appRoot.innerHTML = `
    ${App()}
    `;
  appRoot.classList.add(`${styles.app_root}`);
  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.focus();
    searchInput.selectionStart = searchInput.value.length;
  } else window.addEventListener('load', findSVGElements, false);
}

function findSVGElements() {
  var svg = document.getElementById('mapOfUkraine').contentDocument;
  var svgPolyline = svg.querySelectorAll('polyline');
  var svgPath = svg.querySelector('path');
  for (let i = 0; i < svgPolyline.length; i++) {
    const region = svg.getElementById(svgPolyline[i].id);
    region.setAttribute('value', `${regions[i]}`);
    region.addEventListener('click', e => {
      window.selectRegion(`${regions[i]}`);
    });
  }
  const kyiv = svg.getElementById(svgPath.id);
  kyiv.setAttribute('value', `${regions[25]}`);
  kyiv.addEventListener('click', e => {
    window.selectRegion(regions[25]);
  });
}
function App() {
  let content;
  if (window.dataStore.error !== null) content = `${window.dataStore.error}`;
  else if (window.dataStore.regionPlaces.length == 0)
    content = `<div class="${styles.map_of_ukraine}">${ShowRegions()}</div>`;
  else {
    content = `
    <div class="${styles.container}">
      <div class="${styles.list_block}">
        <div>${showSearchInput()}</div> 
        <div>${showAvailableKinds()}</div>
        <div>${showPlaces()}</div>
      </div>
      <div class="${styles.place_info}" >${showPlaceInfo()}</div>
    </div>`;
  }
  return content;
}

function ShowRegions() {
  // let listOfRegion = [];
  // for (let item in regions) {
  //   listOfRegion.push(`<li><button value="${regions[item]}" onclick="selectRegion(value)" >
  //           ${regions[item]}
  //       </button></li>`);
  // }
  return `<h1 class="${styles.title_start}">Подорожуй<span>Україною</span></h1><object id="mapOfUkraine" class="${styles.obj_map_of_ukraine}" type="image/svg+xml" data="${mapOfUkraine}" src="${mapOfUkraine}"></object>`;
}

function selectRegion(region) {
  window.dataStore.error = null;
  window.dataStore.isDataLoading = true;
  window
    .loadRegionPlaces(region)
    .then(data => {
      window.dataStore.isDataLoading = false;
      // if (error) {
      //   window.dataStore.error = error;
      //} else if (data) {
      //data = data.data;
      for (let place in data) {
        const charCode = data[place].name.charCodeAt(0);
        if (charCode > 1030 && charCode < 1112) {
          window.dataStore.regionPlaces.push({
            xid: data[place].xid,
            name: data[place].name,
            rate: data[place].rate,
            kinds: data[place].kinds.split(','),
          });
        }
      }
      selectAvailableKinds();
      window.dataStore.selectedPlaces = [...window.dataStore.regionPlaces];
      //}
    })
    .catch(error => {
      window.dataStore.error = 'some error occurred ' + error;
    })
    .finally(window.renderApp);
}

function showSearchInput() {
  return `<input id="search" class="${styles.search_input}" value="${window.dataStore.searchRequest}" onsearch="window.dataStore.searchRequest = value; selectPlaces()" onkeyup="window.dataStore.searchRequest = value; selectPlaces()" type="search">`;
}
function showPlaces() {
  let listOfPlace = [];
  listOfPlace.push(`<ul class="${styles.ul_list}">`);
  for (let item in window.dataStore.selectedPlaces) {
    listOfPlace.push(`<li><button class="${styles.button_place} ${styles.link}" value="${window.dataStore.selectedPlaces[item].xid}" onclick="selectPlaceToShow(value)" >
           ${window.dataStore.selectedPlaces[item].name}
        </button></li>`);
  }
  listOfPlace.push(`</ul>`);
  return listOfPlace.join('');
}

function showPlaceInfo() {
  if (window.dataStore.placeToShow == '')
    return `<h2 class="${styles.info_message}">Обирай що цікавить</h2>`;
  else {
    const place = getPlaceInfo();
    return `<div class="${styles.title_place_info}"><strong>${place.name}</strong></div>
            <div class="${styles.meta_place_info}">GPS: ${place.point.lat}, ${place.point.lon} | <a class="${styles.url_place_info} ${styles.link}" href="${place.wikipedia}">Wikipedia</a></div>
            <div class="${styles.image_block_place_info}"><img src="${place.preview.source}" alt=""></div>
            <p class="${styles.text_place_info}">${place.wikipedia_extracts.text}</p>`;
  }
}

function checkPlaceInfo() {
  const { placeToShow } = window.dataStore;
  //const url = getOpenTripMarPlaceUrl(placeToShow);
  if (!Boolean(getPlaceInfo())) {
    return loadPlaceInfo(placeToShow);
    // return fetch(url)
    //   .then(response => response.json())
    //   .then(data => data);
  }
  return Promise.resolve({});
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
  window.dataStore.placeToShow = place;
  window.dataStore.error = null;
  window.dataStore.isDataLoading = true;
  checkPlaceInfo()
    .then(data => {
      //window.dataStore.isDataLoading = false;
      //if (error) window.dataStore.error = error;
      //else if (data) {
      if (Object.keys(data).length !== 0) window.dataStore.placesInfo[place] = data;
      //}
    })
    .catch(() => {
      window.dataStore.error = `<h2 class=${styles.error_message}>Cталася якась помилка</h2>`;
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
function getPlaceInfo() {
  const { placeToShow, placesInfo } = window.dataStore;
  return placesInfo[placeToShow];
}
