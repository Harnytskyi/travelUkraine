// Start from here
let regions = {
  Ternopil: [
    {
      xid: 'Q1366078',
      name: 'Ukrainian Catholic Archeparchy of Ternopil–Zboriv',
      dist: 756.33492924,
      rate: 3,
      wikidata: 'Q1366078',
      kinds: 'religion,other_temples,interesting_places',
      point: { lon: 25.6, lat: 49.5667 },
    },
    {
      xid: 'Q20856290',
      name: 'Statue of Solomiya Krushelnytska in Ternopil',
      dist: 1001.46530663,
      rate: 2,
      wikidata: 'Q20856290',
      kinds: 'historic,monuments_and_memorials,interesting_places,monuments',
      point: { lon: 25.594805, lat: 49.551529 },
    },
  ],
  Zaporizhia: [
    {
      xid: 'Q4109008',
      name: 'Verkhnya Khortytsia',
      dist: 9843.62137871,
      rate: 2,
      wikidata: 'Q4109008',
      kinds: 'historic,historical_places,interesting_places,historic_districts',
      point: { lon: 35.011623, lat: 47.861519 },
    },
    {
      xid: 'Q12101380',
      name: 'Dniprovski porohy',
      dist: 5094.06564701,
      rate: 3,
      wikidata: 'Q12101380',
      kinds: 'interesting_places,natural,nature_reserves,other_nature_conservation_areas',
      point: { lon: 35.081028, lat: 47.862499 },
    },
  ],
};
let places = {
  Q1366078: {
    xid: 'Q1366078',
    name: 'Ukrainian Catholic Archeparchy of Ternopil–Zboriv',
    address: {
      city: 'Тернопіль',
      road: 'Бродівська вулиця',
      state: 'Тернопільська область',
      country: 'Україна',
      village: 'Біла',
      postcode: '46002',
      country_code: 'ua',
      house_number: '32б',
    },
    rate: '3',
    wikidata: 'Q1366078',
    kinds: 'religion,other_temples,interesting_places',
    sources: { geometry: 'wikidata', attributes: ['wikidata'] },
    otm: 'https://opentripmap.com/en/card/Q1366078',
    wikipedia:
      'https://en.wikipedia.org/wiki/Ukrainian%20Catholic%20Archeparchy%20of%20Ternopil%E2%80%93Zboriv',
    image:
      'https://commons.wikimedia.org/wiki/File:%D0%94%D0%BE%D0%BC%D1%96%D0%BD%D1%96%D0%BA%D0%B0%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BE%D1%81%D1%82%D0%B5%D0%BB_%D1%83_%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D0%BE%D0%BB%D1%96.jpg',
    preview: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/%D0%94%D0%BE%D0%BC%D1%96%D0%BD%D1%96%D0%BA%D0%B0%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BE%D1%81%D1%82%D0%B5%D0%BB_%D1%83_%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D0%BE%D0%BB%D1%96.jpg/300px-%D0%94%D0%BE%D0%BC%D1%96%D0%BD%D1%96%D0%BA%D0%B0%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BE%D1%81%D1%82%D0%B5%D0%BB_%D1%83_%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D0%BE%D0%BB%D1%96.jpg',
      height: 400,
      width: 300,
    },
    wikipedia_extracts: {
      title: 'en:Ukrainian Catholic Archeparchy of Ternopil–Zboriv',
      text:
        'The Archeparchy of Ternopil - Zboriv is an archeparchy of the Ukrainian Greek Catholic Church and centre of the ecclesiastical province.The current eparch is Vasyl Semeniuk, who was appointed to this position on 19 October 2006, having previously been Auxiliary Bishop of the eparchy from 2004.',
      html:
        '<p>The <b>Archeparchy of Ternopil - Zboriv</b> is an archeparchy of the Ukrainian Greek Catholic Church and centre of the ecclesiastical province.</p><p>The current eparch is Vasyl Semeniuk, who was appointed to this position on 19 October 2006, having previously been Auxiliary Bishop of the eparchy from 2004.</p>',
    },
    point: { lon: 25.6, lat: 49.5667 },
  },
  Q20856290: {
    xid: 'Q20856290',
    name: 'Statue of Solomiya Krushelnytska in Ternopil',
    address: {
      city: 'Тернопіль',
      state: 'Тернопільська область',
      suburb: 'Центр',
      country: 'Україна',
      postcode: '46000-46499',
      country_code: 'ua',
      neighbourhood: 'Поділ',
    },
    rate: '2',
    wikidata: 'Q20856290',
    kinds: 'historic,monuments_and_memorials,interesting_places,monuments',
    sources: { geometry: 'wikidata', attributes: ['wikidata'] },
    otm: 'https://opentripmap.com/en/card/Q20856290',
    wikipedia:
      'https://uk.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BC%27%D1%8F%D1%82%D0%BD%D0%B8%D0%BA%20%D0%A1%D0%BE%D0%BB%D0%BE%D0%BC%D1%96%D1%97%20%D0%9A%D1%80%D1%83%D1%88%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D1%86%D1%8C%D0%BA%D1%96%D0%B9%20%28%D0%A2%D0%B5%D1%80%D0%BD%D0%BE%D0%BF%D1%96%D0%BB%D1%8C%29',
    image: 'https://commons.wikimedia.org/wiki/File:%D0%A1%D0%BE%D0%BB%D0%BE%D0%BC%D1%96%D1%8F.JPG',
    preview: {
      source:
        'https://upload.wikimedia.org/wikipedia/uk/thumb/4/49/%D0%A1%D0%BE%D0%BB%D0%BE%D0%BC%D1%96%D1%8F.JPG/266px-%D0%A1%D0%BE%D0%BB%D0%BE%D0%BC%D1%96%D1%8F.JPG',
      height: 400,
      width: 266,
    },
    wikipedia_extracts: {
      title: "uk:Пам'ятник Соломії Крушельницькій (Тернопіль)",
      text:
        "Пам'ятник Соломії Крушельницькій в Тернополі — пам'ятник видатній українській оперній співачці Соломії Крушельницькій у місті Тернополі. Перший пам'ятник жінці в Тернополі і перший пам'ятник-монумент Соломії Крушельницькій у повний зріст у світі.Розташований у сквері імені Тараса Шевченка на однойменному бульварі від вулиці Руської навпроти ЦУМу.Оголошений пам'яткою монументального мистецтва місцевого значення (охоронний номер 3256).",
      html:
        "<p><b>Пам'ятник Соломії Крушельницькій в Тернополі</b>&nbsp;— пам'ятник видатній українській оперній співачці Соломії Крушельницькій у місті Тернополі. Перший пам'ятник жінці в Тернополі і перший пам'ятник-монумент Соломії Крушельницькій у повний зріст у світі.</p><p>Розташований у сквері імені Тараса Шевченка на однойменному бульварі від вулиці Руської навпроти ЦУМу.</p><p>Оголошений пам'яткою монументального мистецтва місцевого значення (охоронний номер 3256).</p>",
    },
    point: { lon: 25.594805, lat: 49.551529 },
  },
  Q4109008: {
    xid: 'Q4109008',
    name: 'Verkhnya Khortytsia',
    address: {
      city: 'Запоріжжя',
      road: 'Розенталь вулиця',
      state: 'Запорізька область',
      county: 'Запорізька міська рада',
      country: 'Україна',
      postcode: '69000-69499',
      country_code: 'ua',
      neighbourhood: 'Турист садове товариство',
    },
    rate: '2',
    wikidata: 'Q4109008',
    kinds: 'historic,historical_places,interesting_places,historic_districts',
    sources: { geometry: 'wikidata', attributes: ['wikidata'] },
    otm: 'https://opentripmap.com/en/card/Q4109008',
    wikipedia:
      'https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D1%80%D1%85%D0%BD%D1%8F%20%D0%A5%D0%BE%D1%80%D1%82%D0%B8%D1%86%D1%8F',
    image: 'https://commons.wikimedia.org/wiki/File:Ukraine_adm_location_map_improved.svg',
    preview: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Ukraine_adm_location_map_improved.svg/400px-Ukraine_adm_location_map_improved.svg.png',
      height: 269,
      width: 400,
    },
    wikipedia_extracts: {
      title: 'uk:Верхня Хортиця',
      text:
        'Верхня Хортиця — історична місцевість у правобережному районі сучасного Запоріжжя, колишня німецька колонія. У 1969 році смт Верхня Хортиця включена в смугу м. Запоріжжя.Лежить над річкою Верхня Хортиця, або Вища (Верхня) Хортиця, що впадає у Річище у районі Вирви.Вища Хортиця — варіант української назви, схоже словотворення місцевим стилем, як сусідня Вищетарасівка. Але більш розповсюджена в місті назва — Верхня Хортиця.',
      html:
        '<p><b>Верхня Хортиця</b>&nbsp;— історична місцевість у правобережному районі сучасного Запоріжжя, колишня німецька колонія. У 1969 році смт Верхня Хортиця включена в смугу м. Запоріжжя.</p><p>Лежить над річкою Верхня Хортиця, або Вища (Верхня) Хортиця, що впадає у Річище у районі Вирви.</p><p>Вища Хортиця&nbsp;— варіант української назви, схоже словотворення місцевим стилем, як сусідня Вищетарасівка. Але більш розповсюджена в місті назва&nbsp;— Верхня Хортиця.</p>',
    },
    point: { lon: 35.011623, lat: 47.861519 },
  },
  Q12101380: {
    xid: 'Q12101380',
    name: 'Dniprovski porohy',
    address: {
      state: 'Запорізька область',
      county: 'Запорізька міська рада',
      country: 'Україна',
      postcode: '69000-69499',
      country_code: 'ua',
      city_district: 'Запоріжжя',
    },
    rate: '3',
    wikidata: 'Q12101380',
    kinds: 'interesting_places,natural,nature_reserves,other_nature_conservation_areas',
    sources: { geometry: 'wikidata', attributes: ['wikidata'] },
    otm: 'https://opentripmap.com/en/card/Q12101380',
    wikipedia:
      'https://uk.wikipedia.org/wiki/%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D1%96%20%D0%9F%D0%BE%D1%80%D0%BE%D0%B3%D0%B8%20%28%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%BD%D0%B8%D0%BA%29',
    image:
      'https://commons.wikimedia.org/wiki/File:%D0%A5%D0%BE%D1%80%D1%82%D0%B8%D1%86%D1%8C%D0%BA%D1%96_%D0%B4%D0%B8%D0%BA%D1%96_%D1%96%D1%80%D0%B8%D1%81%D0%B8.JPG',
    preview: {
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/%D0%A5%D0%BE%D1%80%D1%82%D0%B8%D1%86%D1%8C%D0%BA%D1%96_%D0%B4%D0%B8%D0%BA%D1%96_%D1%96%D1%80%D0%B8%D1%81%D0%B8.JPG/400px-%D0%A5%D0%BE%D1%80%D1%82%D0%B8%D1%86%D1%8C%D0%BA%D1%96_%D0%B4%D0%B8%D0%BA%D1%96_%D1%96%D1%80%D0%B8%D1%81%D0%B8.JPG',
      height: 266,
      width: 400,
    },
    wikipedia_extracts: {
      title: 'uk:Дніпровські Пороги (заказник)',
      text:
        'Дніпро́вські Поро́ги — геологічний заказник загальнодержавного значення в Україні. Розташований у межах міста Запоріжжя.Площа природоохоронної території 1383 га. Статус з 1974 р (охороняється з 1963 р.).Охороняється порожиста частина Дніпра, де виходи на поверхню кристалічних порід Українського щита утворювали Дніпрові пороги. До території заказника входять частина острова Хортиці, острів Байди, острів Дубовий, скелі Стіг-1, Стіг-2, Стіг-3 та Два Брати. Кристалічні породи представлені переважно гранітами, гнейсами й магматитами. У багатьох місцях вони відслонюються, утворюючи урвисті береги та скелі.',
      html:
        '<p><b>Дніпро́вські Поро́ги</b>&nbsp;— геологічний заказник загальнодержавного значення в Україні. Розташований у межах міста Запоріжжя.</p><p>Площа природоохоронної території 1383&nbsp;га. Статус з 1974 р (охороняється з 1963&nbsp;р.).</p><p>Охороняється порожиста частина Дніпра, де виходи на поверхню кристалічних порід Українського щита утворювали Дніпрові пороги. До території заказника входять частина острова Хортиці, острів Байди, острів Дубовий, скелі Стіг-1, Стіг-2, Стіг-3 та Два Брати. Кристалічні породи представлені переважно гранітами, гнейсами й магматитами. У багатьох місцях вони відслонюються, утворюючи урвисті береги та скелі.</p>',
    },
    point: { lon: 35.081028, lat: 47.862499 },
  },
};
let regionPlaces = [];
let selectedPlaces;

window.regionPlaces = regionPlaces;
window.selectedPlaces = selectedPlaces;
window.selectRegion = selectRegion;
window.regions = regions;
// window.showPlaces = showPlaces;
window.showPlaceInfo = showPlaceInfo;
window.selectPlace = selectPlace;

let main = document.getElementById('app-root');

main.innerHTML = ShowRegions();

function ShowRegions() {
  let listOfRegion = [];
  for (item in regions) {
    listOfRegion.push(`<li><button value="${item}" onclick="selectRegion(value)" >
            ${item}
        </button></li>`);
  }

  return listOfRegion.join('');
}

function selectRegion(region) {
  for (place in regions[region]) {
    window.regionPlaces.push({
      xid: regions[region][place].xid,
      name: regions[region][place].name,
      rate: regions[region][place].rate,
    });
  }
  window.selectedPlaces = [...regionPlaces];
  showRegionPage();
}

function showRegionPage() {
  main.innerHTML = `<input id="search" onkeyup="selectPlace()" onsearch="selectPlace()" type="search">
    <div id="placesList" class="placesList"></div><div id="placeInfo"></div>`;
  showPlaces();
}
function showPlaces() {
  let listOfPlace = [];
  for (item in window.selectedPlaces) {
    listOfPlace.push(`<li><button value="${window.selectedPlaces[item].xid}" onclick="showPlaceInfo(value)" >
           ${window.selectedPlaces[item].name}
        </button></li>`);
  }
  document.getElementById('placesList').innerHTML = `<div> ${listOfPlace.join('')} </div>`;
}

function showPlaceInfo(place) {
  document.getElementById(
    'placeInfo',
  ).innerHTML = `<img src="${places[place].preview.source}" alt=""><strong>${places[place].name}</strong><p>${places[place].wikipedia_extracts.text}</p>
    <div>GPS: ${places[place].point.lat}, ${places[place].point.lon}</div>`;
}
function selectPlace() {
  window.selectedPlaces = [...window.regionPlaces];
  findPlaces();
  showPlaces();
}
function findPlaces() {
  let searchRequest = document.getElementById('search').value.toUpperCase();
  searchedPlaces = window.selectedPlaces.filter(item =>
    item.name.toUpperCase().includes(searchRequest),
  );
  window.selectedPlaces = searchedPlaces;
}
