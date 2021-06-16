import React from 'react';
import styles from '../style.css';

export function ShowSearchInput({ value = '', setSearchRequest }) {
  const handleSearch = e => setSearchRequest(e.target.value);

  return (
    <input
      id="search"
      className={styles.search_input}
      value={value}
      onChange={handleSearch}
      onKeyUp={handleSearch}
      type="search"
    />
  );
}
