// Start from here

import dataStore from './data/dataStore';
import styles from './style.css';

import renderApp from './framework/render';
import { regions } from './data/openTripMapAPI';

import { selectRegion } from './data/regionData';
import { selectPlaceToShow } from './data/regionData';
import { selectPlaces, changeStatus } from './data/regionData';
import App from './components/App';

window.dataStore = dataStore;
window.styles = styles;

window.regions = regions;
window.selectRegion = selectRegion;
window.selectPlaceToShow = selectPlaceToShow;
window.selectPlaces = selectPlaces;
window.changeStatus = changeStatus;
window.renderApp = renderApp;

renderApp(App, document.getElementById('app-root'));
