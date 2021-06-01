/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { ShowRegions } from './ShowRegions';
import { ShowSearchInput } from './ShowSearchInput';
import { ShowAvailableKinds } from './ShowAvailableKinds';
import { ShowPlaces } from './ShowPlaces';
import { ShowPlaceInfo } from './ShowPlaceInfo';

export default function App() {
  if (window.dataStore.error !== null)
    //content = `${window.dataStore.error}`;
    return <h2 class={styles.error_message}>{window.dataStore.error}</h2>;
  else if (window.dataStore.regionPlaces.length == 0)
    return (
      <div class={styles.map_of_ukraine}>
        <ShowRegions />
      </div>
    );
  else {
    return (
      <div class={styles.container}>
        <div class={styles.list_block}>
          <ShowSearchInput />
          <ShowAvailableKinds />
          <ShowPlaces />
        </div>
        <div class={styles.place_info}>
          <ShowPlaceInfo />
        </div>
      </div>
    );
  }
}
