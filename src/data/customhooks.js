import { useEffect, useState } from 'react';
import {
  filterRegionPlaces,
  selectAvailableKinds,
  selectPlaces,
  sortRegionPlaces,
} from './regionData';
import { loadRegionPlaces, loadPlaceInfo } from './fetchData';

export const useRegionPlaces = () => {
  const [searchRequest, setSearchRequest] = useState('');
  const [availableKinds, setAvailableKinds] = useState({});
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [placeToShow, setPlaceToShow] = useState('');
  const [currentRegion, setCurrentRegion] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [regionPlaces, setRegionPlaces] = useState([]);
  const [placeData, setPlaceData] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [favoritePlaces, setFavoritePlaces] = useState([]);
  const [showFavPlaces, setShowFavPlaces] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (currentRegion !== '') {
      loadRegionPlaces(currentRegion)
        .then(data => {
          const filteredRegionPlaces = filterRegionPlaces(data);
          setRegionPlaces(filteredRegionPlaces);
          setSelectedPlaces(filteredRegionPlaces);
          const selectedKinds = selectAvailableKinds(filteredRegionPlaces);
          setAvailableKinds(selectedKinds);
          let locStorFavPlaces = JSON.parse(localStorage.getItem('favoritePlaces'));
          if (locStorFavPlaces !== null) {
            let locStorFavPlacesxid = locStorFavPlaces.map(item => item.xid);
            setFavoritePlaces(locStorFavPlacesxid);
          }
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(false));
    }
  }, [currentRegion]);

  useEffect(() => {
    let kindsCount = Object.keys(availableKinds).length;
    if (kindsCount != 0 && regionPlaces != undefined)
      selectPlaces({ searchRequest, availableKinds, regionPlaces, setSelectedPlaces });
  }, [availableKinds]);

  useEffect(() => {
    if (searchRequest != null) {
      selectPlaces({ searchRequest, availableKinds, regionPlaces, setSelectedPlaces });
    }
  }, [searchRequest]);

  useEffect(() => {
    if (placeToShow !== '') {
      loadPlaceInfo(placeToShow)
        .then(data => {
          setPlaceData(data);
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(false));
    }
  }, [placeToShow]);

  useEffect(() => {
    if (sortOrder !== '') {
      const sortedPlaces = sortRegionPlaces(regionPlaces, sortOrder);
      setRegionPlaces(sortedPlaces);
      selectPlaces({ searchRequest, availableKinds, regionPlaces, setSelectedPlaces });
    }
  }, [sortOrder]);

  return {
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
  };
};
