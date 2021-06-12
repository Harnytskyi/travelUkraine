import React from 'react';
import { ShowMap } from './ShowMap';

export function ShowRegions({ setCurrentRegion }) {
  return (
    <>
      <h1 className={styles.title_start}>
        Подорожуй<span>Україною</span>
      </h1>
      <ShowMap onClick={setCurrentRegion} />
    </>
  );
}