import App from '../components/App';

export default function renderApp() {
  const appRoot = document.getElementById('app-root');
  appRoot.innerHTML = `
      ${App()}
      `;
  appRoot.classList.add(`${styles.app_root}`);
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
