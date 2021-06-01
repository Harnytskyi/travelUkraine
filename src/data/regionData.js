import { kinds } from '../utils';
import { loadRegionPlaces, loadPlaceInfo } from './fetchData';

window.loadRegionPlaces = loadRegionPlaces;

export function selectRegion(region) {
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
      window.dataStore.error = 'Cталася помилка ' + error;
    })
    .finally(window.renderApp);
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
export function selectPlaces() {
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
function filterByKinds() {
  let selectedKinds = [];
  for (let item in window.dataStore.availableKinds) {
    if (window.dataStore.availableKinds[item] == true) selectedKinds.push(item);
  }
  window.dataStore.selectedPlaces = window.dataStore.regionPlaces.filter(item =>
    item.kinds.some(value => selectedKinds.some(kind => value === kind)),
  );
}
export function changeStatus(value) {
  window.dataStore.availableKinds[value] = !window.dataStore.availableKinds[value];
  selectPlaces();
}
export function checkstatus(value) {
  if (window.dataStore.availableKinds[value] == true) return true;
}

export function selectPlaceToShow(place) {
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
    .catch(error => {
      window.dataStore.error = `Cталася помилка: ${error}`;
    })
    .finally(window.renderApp);
}
function checkPlaceInfo() {
  const { placeToShow, placesInfo } = window.dataStore;
  if (!placesInfo.hasOwnProperty(placeToShow)) {
    return loadPlaceInfo(placeToShow);
  }
  return Promise.resolve({});
}
export function getPlaceInfo() {
  const { placeToShow, placesInfo } = window.dataStore;
  return placesInfo[placeToShow];
}
