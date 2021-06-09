import React from 'react';
export function ShowPlaceInfo({ isLoading, error, placeData }) {
  if (placeData.length == 0) return <h2 className={styles.info_message}>Обирай що цікавить</h2>;
  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <>
        <div className={styles.title_place_info}>
          <strong>{placeData.name}</strong>
        </div>
        <div className={styles.meta_place_info}>
          GPS: {placeData.point.lat}, {placeData.point.lon} |{' '}
          <a className="${styles.url_place_info} ${styles.link}" href={placeData.wikipedia}>
            Wikipedia
          </a>
        </div>
        {placeData.hasOwnProperty('preview') ? (
          <div className={styles.image_block_place_info}>
            <img src={placeData.preview.source} alt="" />
          </div>
        ) : (
          ''
        )}
        {
          <p className={styles.text_place_info}>
            {placeData.hasOwnProperty('wikipedia_extracts')
              ? placeData.wikipedia_extracts.text
              : ''}
          </p>
        }
        <button className={styles.button_favorite}>Додати в обране</button>
      </>
    );
  }
}
