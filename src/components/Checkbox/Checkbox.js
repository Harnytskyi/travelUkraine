import React from 'react';
import styles from './Checkbox.css';

export default function Checkbox({ label = '', value = '', onChange = null, checked = false }) {
  return (
    <label className={styles.check + ' ' + styles.option}>
      <input
        className={styles.check__input}
        type="checkbox"
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <span className={styles.check__box}></span>
      {label}
    </label>
  );
}
