import React from 'react';
import { ShowRegions } from './ShowRegions';
import { ShowSearchInput } from './ShowSearchInput';
import { ShowAvailableKinds } from './ShowAvailableKinds';
import { ShowPlaces } from './ShowPlaces';
import { ShowPlaceInfo } from './ShowPlaceInfo';
import {
  changeStatus,
  checkStatus,
  changeFavoritePlaces,
  checkFavoritePlace,
} from '../data/regionData';
import { useRegionPlaces } from '../data/customhooks';
import { ShowSortButton } from './ShowSortButton';
import { ShowFavoritePlaces } from './ShowFavoritePlaces';
import { ShowHeader } from './ShowHeader';
import styles from '../style.css';

let scrolled;
let interval;
let timer;
const CONTENT_COORDINATE_Y = 68;

function launchScroll() {
  if (window.pageYOffset > CONTENT_COORDINATE_Y) {
    scrolled = window.pageYOffset;
    interval = scrolled / 20;
    scrollToTop();
  }
}

function scrollToTop() {
  if (scrolled > CONTENT_COORDINATE_Y) {
    window.scrollTo(0, scrolled);
    scrolled = scrolled - interval;
    timer = setTimeout(scrollToTop, 5);
  } else {
    clearTimeout(timer);
    window.scrollTo(0, CONTENT_COORDINATE_Y);
  }
}

export default function App() {
  const {
    regionPlaces,
    setCurrentRegion,
    searchRequest,
    setSearchRequest,
    availableKinds,
    setAvailableKinds,
    selectedPlaces,
    setPlaceToShow,
    placeData,
    sortOrder,
    favoritePlaces,
    setFavoritePlaces,
    setSortOrder,
    showFavPlaces,
    setShowFavPlaces,
    error,
    isLoading,
  } = useRegionPlaces();

  if (error !== null)
    return (
      <h2 className={styles.error_message}>
        {typeof error === 'object' ? error.toString() : error}
      </h2>
    );

  if (showFavPlaces)
    return (
      <>
        <ShowHeader
          setShowFavPlaces={setShowFavPlaces}
          CONTENT_COORDINATE_Y={CONTENT_COORDINATE_Y}
        />
        <ShowFavoritePlaces />
      </>
    );

  if (regionPlaces.length === 0)
    return (
      <div className={styles.map_of_ukraine}>
        <ShowRegions setCurrentRegion={setCurrentRegion} />
      </div>
    );

  return (
    <>
      <ShowHeader setShowFavPlaces={setShowFavPlaces} CONTENT_COORDINATE_Y={CONTENT_COORDINATE_Y} />
      <div className={styles.container}>
        <div className={styles.list_block}>
          <ShowSearchInput value={searchRequest} setSearchRequest={setSearchRequest} />
          <ShowSortButton onChange={setSortOrder} sortOrder={sortOrder} />
          <ShowAvailableKinds
            availableKinds={availableKinds}
            setAvailableKinds={setAvailableKinds}
            onChange={changeStatus}
            checkStatus={checkStatus}
          />
          <ShowPlaces
            selectedPlaces={selectedPlaces}
            setPlaceToShow={setPlaceToShow}
            launchScroll={launchScroll}
          />
        </div>
        <div className={styles.place_info}>
          <ShowPlaceInfo
            error={error}
            isLoading={isLoading}
            placeData={placeData}
            changeFavoritePlaces={changeFavoritePlaces}
            favoritePlaces={favoritePlaces}
            setFavoritePlaces={setFavoritePlaces}
            checkFavoritePlace={checkFavoritePlace}
          />
        </div>
      </div>
    </>
  );
}
