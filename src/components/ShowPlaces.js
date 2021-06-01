/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

export function ShowPlaces() {
  return (
    <>
      <ul class={styles.ul_list}>
        {window.dataStore.selectedPlaces.map(item => (
          <li>
            <button
              class={styles.button_place + ' ' + styles.link}
              value={item.xid}
              onclick={e => selectPlaceToShow(e.target.value)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
