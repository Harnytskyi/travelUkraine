/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from './element';

let Component, Target;

export default function renderApp(componentFunction = null, target = null) {
  if (componentFunction) Component = componentFunction;
  if (target) Target = target;
  Target.innerHTML = '';
  Target.appendChild(<Component />);
  const searchInput = document.getElementById('search');
  if (searchInput) {
    searchInput.focus();
    searchInput.selectionStart = searchInput.value.length;
  } else window.addEventListener('load', findSVGElements, false);
}

function findSVGElements() {
  var svg = document.getElementById('mapOfUkraine').contentDocument;
  var svgPolyline = svg.querySelectorAll('polyline');
  var svgPath = svg.querySelector('path');
  for (let i = 0; i < svgPolyline.length; i++) {
    const region = svg.getElementById(svgPolyline[i].id);
    region.setAttribute('value', `${regions[i]}`);
    region.addEventListener('click', e => {
      window.selectRegion(`${regions[i]}`);
    });
  }
  const kyiv = svg.getElementById(svgPath.id);
  kyiv.setAttribute('value', `${regions[25]}`);
  kyiv.addEventListener('click', e => {
    window.selectRegion(regions[25]);
  });
}
