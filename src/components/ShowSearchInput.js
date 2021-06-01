/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { selectPlaces } from '../data/regionData';
export function ShowSearchInput() {
  return (
    <input
      id="search"
      class={styles.search_input}
      value={window.dataStore.searchRequest}
      onsearch={e => {
        window.dataStore.searchRequest = e.target.value;
        selectPlaces();
      }}
      onkeyup={e => {
        window.dataStore.searchRequest = e.target.value;
        selectPlaces();
      }}
      type="search"
    />
  );
}
