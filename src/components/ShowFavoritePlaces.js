import React from 'react';

const WIDTH___ = 235

export function ShowFavoritePlaces() {
  let locStorFavPlaces = JSON.parse(localStorage.getItem('favoritePlaces')); // locStoreFavPlaces
  let arrayLength;

  if (locStorFavPlaces == null || locStorFavPlaces.length == 0) {
    arrayLength = 1;
  }  // TODO === , 1 - magicNumber
  else {
    arrayLength = Object.keys(locStorFavPlaces).length;
  }

  let containerHeight = { height: arrayLength * WIDTH___ }; //  magicNumber const


  return (
    <div className={styles.favorite_container} style={containerHeight}>
      {locStorFavPlaces == null || locStorFavPlaces.length == 0 ? (
        <h2 className={styles.info_message}>Немає обраних місць</h2>
      ) : (
        locStorFavPlaces.map(placeData => (
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
        ))
      )}
    </div>
  );
}
