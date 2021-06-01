/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { getPlaceInfo } from '../data/regionData';

export function ShowPlaceInfo() {
  if (window.dataStore.placeToShow == '')
    return <h2 class={styles.info_message}>Обирай що цікавить</h2>;
  else {
    const place = getPlaceInfo();
    return (
      <>
        <div class={styles.title_place_info}>
          <strong>{place.name}</strong>
        </div>
        <div class={styles.meta_place_info}>
          GPS: {place.point.lat}, {place.point.lon} |{' '}
          <a class="${styles.url_place_info} ${styles.link}" href={place.wikipedia}>
            Wikipedia
          </a>
        </div>
        {place.hasOwnProperty('preview') && (
          <div class={styles.image_block_place_info}>
            <img src={place.preview.source} alt="" />
          </div>
        )}
        {
          <p class={styles.text_place_info}>
            {place.hasOwnProperty('wikipedia_extracts') ? place.wikipedia_extracts.text : ''}
          </p>
        }
      </>
    );
  }
}
