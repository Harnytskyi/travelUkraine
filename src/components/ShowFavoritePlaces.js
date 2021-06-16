import React from 'react';
import styles from '../style.css';

export function ShowFavoritePlaces() {
  let localStorageFavPlaces = JSON.parse(localStorage.getItem('favoritePlaces'));

  if (localStorageFavPlaces == null || localStorageFavPlaces.length === 0)
    return (
      <div className={styles.favorite_container} style={containerHeight}>
        <h2 className={styles.info_message}>Немає обраних місць</h2>
      </div>
    );

  const SECTION_HEIGHT = 512;
  const NUMBER_OF_COLUMNS = 3;
  const NUMBER_OF_SECTIONS = Math.ceil(
    Object.keys(localStorageFavPlaces).length / NUMBER_OF_COLUMNS,
  );
  const containerHeight = { height: NUMBER_OF_SECTIONS * SECTION_HEIGHT };

  return (
    <div className={styles.favorite_container} style={containerHeight}>
      {localStorageFavPlaces.map(placeData => (
        <div key={placeData.xid} className={styles.favorite_place}>
          {placeData.hasOwnProperty('preview') ? (
            <img className={styles.favorite_place_image} src={placeData.preview} alt="" />
          ) : (
            ''
          )}
          <div className={styles.favorite_place_body}>
            <div className={styles.favorite_place_title}>{placeData.name}</div>
            <div className={styles.favorite_place_meta}>{placeData.state}</div>
            {placeData.hasOwnProperty('text') ? (
              <div className={styles.favorite_place_text}>
                <p>{placeData.text}</p>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
