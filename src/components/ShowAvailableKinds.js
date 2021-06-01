/** @jsx createElement */
/** @jsxFrag createFragment */
import { changeStatus, checkStatus } from '../data/regionData';
import { createElement, createFragment } from '../framework/element';

export function ShowAvailableKinds() {
  return (
    <>
      {Object.keys(window.dataStore.availableKinds).map(item => (
        <label>
          <input
            type="checkbox"
            value={item}
            onchange={e => changeStatus(e.target.value)}
            checked={checkStatus(item)}
          />
          {item}
        </label>
      ))}
    </>
  );
}
