/** @jsx createElement */
/** @jsxFrag createFragment */
import { changeStatus, checkStatus } from '../data/regionData';
import { createElement, createFragment } from '../framework/element';
import Checkbox from './Checkbox';

export function ShowAvailableKinds() {
  return (
    <>
      {Object.keys(window.dataStore.availableKinds).map(item => (
        <Checkbox
          label={item}
          value={item}
          onChange={e => changeStatus(e.target.value)}
          checked={checkStatus(item)}
        />
      ))}
    </>
  );
}
