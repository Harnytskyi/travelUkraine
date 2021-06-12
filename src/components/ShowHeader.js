import React, { useEffect, useState } from 'react';

export function ShowHeader() {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setSmall(window.pageYOffset > 100));
    }
  }, []);
  return (
    <header className={styles.header + ' ' + (small ? styles.scrolled : '')}>
      <div className="header_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                className={styles.header_content}
                // "d-flex flex-row align-items-center justify-content-start"
              >
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
                      <a href="/">Головна</a>
                    </li>
                    <li>
                      <a href="/favoritePlaces">Обрані місця</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
