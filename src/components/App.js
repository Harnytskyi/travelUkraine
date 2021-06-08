/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework';
import { ShowRegions } from './ShowRegions';
import { ShowSearchInput } from './ShowSearchInput';
import { ShowAvailableKinds } from './ShowAvailableKinds';
import { ShowPlaces } from './ShowPlaces';
import { ShowPlaceInfo } from './ShowPlaceInfo';
import { changeStatus } from '../data/regionData';
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
    error,
    isLoading,
  } = useRegionPlaces();

  if (error !== null) return <h2 class={styles.error_message}>{error}</h2>;
  else if (regionPlaces.length == 0)
    return (
      <div class={styles.map_of_ukraine}>
        <ShowRegions onClick={setCurrentRegion} />
      </div>
    );
  else {
    return (
      <div class={styles.container}>
        <div class={styles.list_block}>
          <ShowSearchInput
            value={searchRequest}
            onSearch={setSearchRequest}
            onKeyup={setSearchRequest}
          />
          <ShowAvailableKinds
            availableKinds={availableKinds}
            setAvailableKinds={setAvailableKinds}
            onChange={changeStatus}
          />
          <ShowPlaces selectedPlaces={selectedPlaces} onClick={setPlaceToShow} />
        </div>
        <div class={styles.place_info}>
          <ShowPlaceInfo error={error} isLoading={isLoading} placeData={placeData} />
        </div>
      </div>
    );
  }
}
