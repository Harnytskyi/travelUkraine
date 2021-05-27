import { getPlaceInfo } from '../data/selectPlaceToShow';

export function showPlaceInfo() {
  if (window.dataStore.placeToShow == '')
    return `<h2 class="${styles.info_message}">Обирай що цікавить</h2>`;
  else {
    const place = getPlaceInfo();
    let content = `<div class="${styles.title_place_info}"><strong>${place.name}</strong></div>
      <div class="${styles.meta_place_info}">GPS: ${place.point.lat}, ${place.point.lon} | <a class="${styles.url_place_info} ${styles.link}" href="${place.wikipedia}">Wikipedia</a></div>`;
    if (place.hasOwnProperty('preview')) {
      content += `<div class="${styles.image_block_place_info}"><img src="${place.preview.source}" alt=""></div>`;
    }
    content += `<p class="${styles.text_place_info}">${place.wikipedia_extracts.text}</p>`;
    return content;
  }
}
