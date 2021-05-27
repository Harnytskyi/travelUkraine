// Start from here

import dataStore from './data/dataStore';
import styles from './style.css';

import renderApp from './framework/render';
import { regions } from './data/openTripMapAPI';

import { selectRegion } from './data/selectRegion';
import { selectPlaceToShow } from './data/selectPlaceToShow';
import { selectPlaces, changeStatus } from './data/selectPlaces';

window.dataStore = dataStore;
window.styles = styles;

window.regions = regions;
window.selectRegion = selectRegion;
window.selectPlaceToShow = selectPlaceToShow;
window.selectPlaces = selectPlaces;
window.changeStatus = changeStatus;
window.renderApp = renderApp;

renderApp();
