import { getOpenTripMapUrl, getOpenTripMarPlaceUrl } from './openTripMapAPI';

export function loadRegionPlaces(region) {
  const url = getOpenTripMapUrl(region);
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
}

export function loadPlaceInfo(placeToLoad) {
  const url = getOpenTripMarPlaceUrl(placeToLoad);
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
}
