import React, { useEffect, useState } from 'react';
import styles from '../style.css';

export function ShowHeader({ setShowFavPlaces, CONTENT_COORDINATE_Y }) {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setSmall(window.pageYOffset >= CONTENT_COORDINATE_Y));
    }
  }, []);

  const handleClickHideFavPlaces = () => setShowFavPlaces(false);
  const handleClickShowFavPlaces = () => setShowFavPlaces(true);

  return (
    <header className={`${styles.header} ${small ? styles.scrolled : ''}`}>
      <div className={styles.header_content}>
        <div className="logo_container">
          <a href="/travelUkraine/">
            <div className={styles.logo_text}>
              Подорожуй<span>Україною</span>
            </div>
          </a>
        </div>
        <nav className={styles.main_nav_container}>
          <ul className={styles.main_nav}>
            <li>
              <button onClick={handleClickHideFavPlaces}>Головна</button>
            </li>
            <li>
              <button onClick={handleClickShowFavPlaces}>Обрані місця</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
