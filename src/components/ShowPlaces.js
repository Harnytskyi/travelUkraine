import React from 'react';
import styles from '../style.css';

export function ShowPlaces({ selectedPlaces, setPlaceToShow, launchScroll }) {
  const handleSetPlaceToShow = e => {
    setPlaceToShow(e.target.value);
    launchScroll();
  };

  return (
    <>
      <ul className={styles.ul_list}>
        {selectedPlaces.map(item => (
          <li key={item.xid}>
            <button
              className={`${styles.button_place} ${styles.link}`}
              value={item.xid}
              onClick={handleSetPlaceToShow}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
