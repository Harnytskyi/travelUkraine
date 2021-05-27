import { checkstatus } from '../data/selectPlaces';

export function showAvailableKinds() {
  let kindsCheckboxes = Object.keys(window.dataStore.availableKinds).map(
    item =>
      `<label><input type="checkbox" value="${item}" onchange="changeStatus(value)" ${checkstatus(
        item,
      )}>${item}</label>`,
  );
  return kindsCheckboxes.join('');
}
