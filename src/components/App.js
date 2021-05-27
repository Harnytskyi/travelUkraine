import { ShowRegions } from './ShowRegions';
import { showSearchInput } from './ShowSearchInput';
import { showAvailableKinds } from './ShowAvailableKinds';
import { showPlaces } from './ShowPlaces';
import { showPlaceInfo } from './ShowPlaceInfo';

export default function App() {
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
