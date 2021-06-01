/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import mapOfUkraine from '../map-ukraine.svg';

export function ShowRegions() {
  return (
    <>
      <h1 class={styles.title_start}>
        Подорожуй<span>Україною</span>
      </h1>
      <object
        id="mapOfUkraine"
        class={styles.obj_map_of_ukraine}
        type="image/svg+xml"
        data={mapOfUkraine}
        src={mapOfUkraine}
      ></object>
    </>
  );
}
