import React from 'react';
import { kinds } from '../utils';
import Checkbox from './Checkbox';

export function ShowAvailableKinds({ availableKinds, setAvailableKinds, onChange, checkStatus }) {
  return (
    <>
      {Object.keys(availableKinds).map(item => (
        <Checkbox
          key={item}
          label={kinds[item]}
          value={item}
          onChange={e => onChange(e.target.value, availableKinds, setAvailableKinds)}
          checked={checkStatus(item, availableKinds)}
        />
      ))}
    </>
  );
}
