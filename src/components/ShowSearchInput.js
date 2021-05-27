export function showSearchInput() {
  return `<input id="search" class="${styles.search_input}" value="${window.dataStore.searchRequest}" onsearch="window.dataStore.searchRequest = value; selectPlaces()" onkeyup="window.dataStore.searchRequest = value; selectPlaces()" type="search">`;
}
