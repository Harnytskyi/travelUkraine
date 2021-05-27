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
  if (window.dataStore.availableKinds[value] == true) return `checked`;
}
