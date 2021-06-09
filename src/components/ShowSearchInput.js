import React from 'react';
export function ShowSearchInput({ value = '', onSearch, onKeyUp }) {
  return (
    <input
      id="search"
      className={styles.search_input}
      value={value}
      onChange={e => onSearch(e.target.value)}
      onKeyUp={e => onKeyUp(e.target.value)}
      type="search"
    />
  );
}
