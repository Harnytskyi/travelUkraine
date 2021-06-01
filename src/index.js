// Start from here

import dataStore from './data/dataStore';
import styles from './style.css';

import renderApp from './framework/render';
import App from './components/App';

window.dataStore = dataStore;
window.styles = styles;

renderApp(App, document.getElementById('app-root'));
