import { kinds } from '../utils';

export function filterRegionPlaces(data) {
  let regionPlaces = [];
  for (let place in data) {
    const charCode = data[place].name.charCodeAt(0);
    if (charCode > 1030 && charCode < 1112) {
      regionPlaces.push({
        xid: data[place].xid,
        name: data[place].name,
        rate: data[place].rate,
        kinds: data[place].kinds.split(','),
      });
    }
  }
  return regionPlaces;
}

export function selectAvailableKinds(regionPlaces) {
  let availableKinds = [];
  let kindsArray = [];

  for (let item in regionPlaces) {
    let kindsOfObject = regionPlaces[item].kinds;
    kindsArray = kindsArray.concat(
      kindsOfObject.filter(
        item =>
          Object.keys(kinds).some(kind => kind === item) && kindsArray.every(kind => kind != item),
      ),
    );
  }
  for (let kind in kindsArray) {
    availableKinds[kindsArray[kind]] = true;
  }
  return availableKinds;
}
export function selectPlaces({ searchRequest, availableKinds, regionPlaces, setSelectedPlaces }) {
  let selectedPlaces = [];
  selectedPlaces = filterByKinds(regionPlaces, availableKinds);
  selectedPlaces = findPlaces(selectedPlaces, searchRequest);
  setSelectedPlaces(selectedPlaces);
}
function findPlaces(selectedPlaces, requestFromInput) {
  let searchRequest = requestFromInput.toUpperCase();
  let searchedPlaces = selectedPlaces.filter(item =>
    item.name.toUpperCase().includes(searchRequest),
  );
  return searchedPlaces;
}
function filterByKinds(regionPlaces, availableKinds) {
  let selectedKinds = [];
  for (let item in availableKinds) {
    if (availableKinds[item] == true) selectedKinds.push(item);
  }
  let selectedPlaces = regionPlaces.filter(item =>
    item.kinds.some(value => selectedKinds.some(kind => value === kind)),
  );
  return selectedPlaces;
}
export function changeStatus(value, availableKinds, setAvailableKinds) {
  let changedKinds = { ...availableKinds };
  changedKinds[value] = !changedKinds[value];
  setAvailableKinds(changedKinds);
}
export function checkStatus(value, availableKinds) {
  if (availableKinds[value] == true) return true;
}
export function checkSortOrder(value, currentSortOrder) {
  if (value == currentSortOrder) return true;
}
export function sortRegionPlaces(regionPlaces, sortOrder) {
  if (sortOrder == 'rating') return regionPlaces.sort((a, b) => a.rate - b.rate);
  if (sortOrder == 'alphabet') return regionPlaces.sort((a, b) => a.name.localeCompare(b.name));
}
