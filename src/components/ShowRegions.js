/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import mapOfUkraine from '../map-ukraine.svg';
import { regions } from '../data/openTripMapAPI';

export function ShowRegions({ onClick }) {
  return (
    <>
      <h1 class={styles.title_start}>
        Подорожуй<span>Україною</span>
      </h1>
      {regions.map(item => (
        <li>
          <button value={item} onClick={e => onClick(e.target.value)}>
            {item}
          </button>
        </li>
      ))}
      {/* <object
        id="mapOfUkraine"
        class={styles.obj_map_of_ukraine}
        type="image/svg+xml"
        data={mapOfUkraine}
        src={mapOfUkraine}
      >
      </object>  */}
    </>
  );
}
