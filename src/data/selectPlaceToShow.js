import { loadPlaceInfo } from './regionData';

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
    .catch(() => {
      window.dataStore.error = `<h2 class=${styles.error_message}>Cталася якась помилка</h2>`;
    })
    .finally(window.renderApp);
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
export function getPlaceInfo() {
  const { placeToShow, placesInfo } = window.dataStore;
  return placesInfo[placeToShow];
}
