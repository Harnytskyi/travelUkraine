/** @jsx createElement */
/** @jsxFrag createFragment */
import { checkSortOrder } from '../data/regionData';
import { createElement, createFragment } from '../framework/element';
export function ShowSortButton({ onChange, sortOrder }) {
  return (
    <div class={styles.sort_block}>
      <label class={styles.radio_sort_container} value="">
        <input
          type="radio"
          name="sort"
          id="rating"
          value="rating"
          onChange={e => onChange(e.target.value)}
          checked={checkSortOrder('rating', sortOrder)}
        />
        <div class={styles.radio_sort + ' ' + styles.radio_sort_rating}></div>
      </label>
      <label class={styles.radio_sort_container}>
        <input
          type="radio"
          name="sort"
          id="alphabet"
          value="alphabet"
          onChange={e => onChange(e.target.value)}
          checked={checkSortOrder('alphabet', sortOrder)}
        />
        <div class={styles.radio_sort + ' ' + styles.radio_sort_alpha}></div>
      </label>
    </div>
  );
}
