/** @jsx createElement */
/** @jsxFrag createFragment */
import { checkstatus } from '../data/regionData';
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
            checked={checkstatus(item)}
          />
          {item}
        </label>
      ))}
    </>
  );
}
