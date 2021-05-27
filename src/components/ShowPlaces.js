export function showPlaces() {
  let listOfPlace = [];
  listOfPlace.push(`<ul class="${styles.ul_list}">`);
  for (let item in window.dataStore.selectedPlaces) {
    listOfPlace.push(`<li><button class="${styles.button_place} ${styles.link}" value="${window.dataStore.selectedPlaces[item].xid}" onclick="selectPlaceToShow(value)" >
             ${window.dataStore.selectedPlaces[item].name}
          </button></li>`);
  }
  listOfPlace.push(`</ul>`);
  return listOfPlace.join('');
}
