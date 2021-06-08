/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
export function ShowSearchInput({ value = '', onSearch, onKeyup }) {
  return (
    <input
      id="search"
      class={styles.search_input}
      value={value}
      onSearch={e => onSearch(e.target.value)}
      onKeyup={e => onKeyup(e.target.value)}
      type="search"
    />
  );
}
