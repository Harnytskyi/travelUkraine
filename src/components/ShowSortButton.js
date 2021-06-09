import React from 'react';
import { checkSortOrder } from '../data/regionData';
import styles from '../style.css';

const SORT_ORDERS = ['rating', 'alphabet'];
const sortClasses = { rating: styles.radio_sort_rating, alphabet: styles.radio_sort_alpha };
export function ShowSortButton({ onChange, sortOrder }) {
  return (
    <div className={styles.sort_block}>
      {SORT_ORDERS.map(item => (
        <label className={styles.radio_sort_container} key={item}>
          <input
            type="radio"
            name="sort"
            id={item}
            value={item}
            onChange={e => onChange(e.target.value)}
            checked={checkSortOrder({ item }, sortOrder)}
          />
          <div className={styles.radio_sort + ' ' + sortClasses[item]}></div>
        </label>
      ))}
    </div>
  );
}
