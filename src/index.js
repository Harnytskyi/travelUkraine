import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './style.css';
import App from './components/App';

window.styles = styles;

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app-root'),
);
