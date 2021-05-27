import { kinds } from '../utils';

import { loadRegionPlaces } from './regionData';

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
      window.dataStore.error = 'some error occurred ' + error;
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
