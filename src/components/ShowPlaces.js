import React from 'react';
export function ShowPlaces({ selectedPlaces, onClick }) {
  return (
    <>
      <ul className={styles.ul_list}>
        {selectedPlaces.map(item => (
          <li key={item.xid}>
            <button
              className={styles.button_place + ' ' + styles.link} //todo
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
