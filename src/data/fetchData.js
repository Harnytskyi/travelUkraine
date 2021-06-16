import { getOpenTripMapUrl, getOpenTripMarPlaceUrl } from './openTripMapAPI';

const dataStore = {
  regionPlaces: [],
  placesInfo: {},
};

export function loadRegionPlaces(region) {
  const url = getOpenTripMapUrl(region);
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      dataStore.regionPlaces = data;
      return data;
    });
}

export function loadPlaceInfo(placeToLoad) {
  const currentPlaceData = dataStore.placesInfo[placeToLoad];
  if (currentPlaceData) return Promise.resolve(currentPlaceData);
  const url = getOpenTripMarPlaceUrl(placeToLoad);
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      dataStore.placesInfo[placeToLoad] = data;
      return data;
    });
}
