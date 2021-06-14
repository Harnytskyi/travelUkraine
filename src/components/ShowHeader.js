import React, { useEffect, useState } from 'react';

export function ShowHeader({ setShowFavPlaces }) {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setSmall(window.pageYOffset > 100));
    }
  }, []);


  const handleClickHidePlaces = () => setShowFavPlaces(false);

  return (
    <header className={styles.header + ' ' + (small ? styles.scrolled : '')}>
      <div className={styles.header_content}>
        <div className="logo_container">
          <a href="/">
            <div className={styles.logo_text}>
              Подорожуй<span>Україною</span>
            </div>
          </a>
        </div>
        <nav className={styles.main_nav_container}>
          <ul className={styles.main_nav}>
            <li>
              <button onClick={handleClickHidePlaces}>Головна</button>
            </li>
            <li>
              <button onClick={() => setShowFavPlaces(true)}>Обрані місця</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
