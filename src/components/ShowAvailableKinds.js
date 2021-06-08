/** @jsx createElement */
/** @jsxFrag createFragment */
import { changeStatus, checkStatus, selectAvailableKinds } from '../data/regionData';
import { createElement, createFragment } from '../framework/element';
import Checkbox from './Checkbox';

export function ShowAvailableKinds({ availableKinds, setAvailableKinds, onChange }) {
  return (
    <>
      {Object.keys(availableKinds).map(item => (
        <Checkbox
          label={item}
          value={item}
          onChange={e => onChange(e.target.value, availableKinds, setAvailableKinds)}
          checked={checkStatus(item, availableKinds)}
        />
      ))}
    </>
  );
}
