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
  const { data } = useExample(availableKinds, regionPlaces, searchRequest, setSelectedPlaces);

  useEffect(() => {
    setIsLoading(true);
    if (currentRegion !== '') {
      loadRegionPlaces(currentRegion)
        .then(data => {
          //const {message, code} = data;
          //if(code !== '200' && message) throw Error(message);
          const filteredRegionPlaces = filterRegionPlaces(data);
          //setError(null);
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
  function useExample(availableKinds, regionPlaces, searchRequest, setSelectedPlaces) {
    const [data, updateData] = useState([]);

    useEffect(() => {
      let kindsCount = Object.keys(availableKinds).length;
      if (kindsCount != 0 && regionPlaces != undefined)
        selectPlaces({ searchRequest, availableKinds, regionPlaces, setSelectedPlaces });
    }, [availableKinds]);
    return {
      data,
    };
  }

  useEffect(() => {
    if (searchRequest != null) {
      selectPlaces({ searchRequest, availableKinds, regionPlaces, setSelectedPlaces });
    }
  }, [searchRequest]);
  useEffect(() => {
    if (placeToShow !== '') {
      loadPlaceInfo(placeToShow)
        .then(data => {
          //const {message, code} = data;
          //if(code !== '200' && message) throw Error(message);
          //setError(null);
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
    error,
    isLoading,
  };
};
