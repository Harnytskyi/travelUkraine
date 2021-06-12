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
  else if (showFavPlaces)
    return (
      <>
        <ShowHeader setShowFavPlaces={setShowFavPlaces} />
        <ShowFavoritePlaces />
      </>
    );
  else if (regionPlaces.length == 0)
    return (
      <div className={styles.map_of_ukraine}>
        <ShowRegions setCurrentRegion={setCurrentRegion} />
      </div>
    );
  else {
    return (
      <>
        <ShowHeader setShowFavPlaces={setShowFavPlaces} />
        <div className={styles.container}>
          <div className={styles.list_block}>
            <ShowSearchInput
              value={searchRequest}
              onSearch={setSearchRequest}
              onKeyUp={setSearchRequest}
            />
            <ShowSortButton onChange={setSortOrder} sortOrder={sortOrder} />
            <ShowAvailableKinds
              availableKinds={availableKinds}
              setAvailableKinds={setAvailableKinds}
              onChange={changeStatus}
              checkStatus={checkStatus}
            />
            <ShowPlaces selectedPlaces={selectedPlaces} onClick={setPlaceToShow} />
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
}