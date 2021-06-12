import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ShowRegions } from './ShowRegions';
import { ShowSearchInput } from './ShowSearchInput';
import { ShowAvailableKinds } from './ShowAvailableKinds';
import { ShowPlaces } from './ShowPlaces';
import { ShowPlaceInfo } from './ShowPlaceInfo';
import { ShowSortButton } from './ShowSortButton';
import { ShowFavoritePlaces } from './ShowFavoritePlaces';
import { ShowHeader } from './ShowHeader';
import {
  changeStatus,
  checkStatus,
  changeFavoritePlaces,
  checkFavoritePlace,
} from '../data/regionData';
import { useRegionPlaces } from '../data/customhooks';

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
    error,
    isLoading,
  } = useRegionPlaces();

  return (
    <>
      <Route
        exact
        path="/"
        render={() =>
          error !== null ? (
            <h2 className={styles.error_message}>
              {typeof error === 'object' ? error.toString() : error}
            </h2>
          ) : regionPlaces.length == 0 ? (
            <ShowRegions setCurrentRegion={setCurrentRegion} />
          ) : (
            <>
              <ShowHeader />
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
          )
        }
      />
      <Route
        exact
        path="/favoritePlaces"
        render={() => (
          <>
            <ShowHeader />
            <ShowFavoritePlaces />
          </>
        )}
      />
    </>
  );
}
