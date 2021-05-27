import mapOfUkraine from '../map-ukraine.svg';

export function ShowRegions() {
  // let listOfRegion = [];
  // for (let item in regions) {
  //   listOfRegion.push(`<li><button value="${regions[item]}" onclick="selectRegion(value)" >
  //           ${regions[item]}
  //       </button></li>`);
  // }
  return `<h1 class="${styles.title_start}">Подорожуй<span>Україною</span></h1><object id="mapOfUkraine" class="${styles.obj_map_of_ukraine}" type="image/svg+xml" data="${mapOfUkraine}" src="${mapOfUkraine}"></object>`;
}
