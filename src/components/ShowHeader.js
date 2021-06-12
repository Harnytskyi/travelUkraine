import React, { useEffect, useState } from 'react';

export function ShowHeader({ setShowFavPlaces }) {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setSmall(window.pageYOffset > 100));
    }
  }, []);
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
              <button onClick={e => setShowFavPlaces(false)}>Головна</button>
            </li>
            <li>
              <button onClick={e => setShowFavPlaces(true)}>Обрані місця</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
