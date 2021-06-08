/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

export function ShowPlaces({ selectedPlaces, onClick }) {
  return (
    <>
      <ul class={styles.ul_list}>
        {selectedPlaces.map(item => (
          <li>
            <button
              class={styles.button_place + ' ' + styles.link}
              value={item.xid}
              onClick={e => onClick(e.target.value)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
