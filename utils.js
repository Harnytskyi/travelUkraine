export const regionsCoordinates = {
  Krym: {
    lon_min: 32.4642563,
    lon_max: 36.5732288,
    lat_min: 44.3907396,
    lat_max: 45.9511497,
  },
  Volyn: {
    lon_min: 24.1287231,
    lon_max: 25.5373764,
    lat_min: 50.6911293,
    lat_max: 51.6681902,
  },
  Kyiv: {
    lon_min: 29.7125244,
    lon_max: 30.3724766,
    lat_min: 49.3283665,
    lat_max: 51.4423992,
  },
  Khmelnytskyi: {
    lon_min: 26.3889885,
    lon_max: 27.3504639,
    lat_min: 48.6145267,
    lat_max: 50.2584005,
  },
  Zhytomyr: {
    lon_min: 27.6812553,
    lon_max: 29.2579651,
    lat_min: 49.8918697,
    lat_max: 51.4189074,
  },
  Ternopil: {
    lon_min: 25.2999687,
    lon_max: 26.1488342,
    lat_min: 48.8745383,
    lat_max: 49.8451229,
  },
  Rivne: {
    lon_min: 26.0971642,
    lon_max: 26.8395996,
    lat_min: 50.5224859,
    lat_max: 51.7598717,
  },
  Lviv: {
    lon_min: 23.47229,
    lon_max: 24.7221565,
    lat_min: 49.5465978,
    lat_max: 50.242704,
  },
  Kirovograd: {
    lon_min: 30.591259,
    lon_max: 33.4671021,
    lat_min: 48.224787,
    lat_max: 48.7110135,
  },
  Dnipropetrovsk: {
    lon_min: 33.8109398,
    lon_max: 36.0679436,
    lat_min: 48.1351628,
    lat_max: 48.7620733,
  },
  Kharkiv: {
    lon_min: 35.4703903,
    lon_max: 37.6388168,
    lat_min: 49.2184941,
    lat_max: 50.219094,
  },
  Poltava: {
    lon_min: 32.8285217,
    lon_max: 34.8431396,
    lat_min: 49.2067196,
    lat_max: 50.0993309,
  },
  Cherkasy: {
    lon_min: 31.2179947,
    lon_max: 32.4386787,
    lat_min: 49.0775767,
    lat_max: 49.8202651,
  },
  Sumy: {
    lon_min: 33.2145882,
    lon_max: 35.1259518,
    lat_min: 50.5399447,
    lat_max: 51.1806343,
  },
  Chernihiv: {
    lon_min: 30.9596443,
    lon_max: 32.9368401,
    lat_min: 50.7713164,
    lat_max: 52.0050683,
  },
  Zaporizhzhia: {
    lon_min: 34.9693108,
    lon_max: 36.032238,
    lat_min: 46.4869288,
    lat_max: 48.0394139,
  },
  Kherson: {
    lon_min: 32.409668,
    lon_max: 34.6206665,
    lat_min: 46.2367932,
    lat_max: 46.813219,
  },
  Donetsk: {
    lon_min: 37.1887207,
    lon_max: 38.2104492,
    lat_min: 46.9108747,
    lat_max: 48.8710382,
  },
  Luhansk: {
    lon_min: 38.4847641,
    lon_max: 39.6823597,
    lat_min: 48.3014667,
    lat_max: 49.6119335,
  },
  Zakarpattia: {
    lon_min: 22.2761536,
    lon_max: 23.6830902,
    lat_min: 48.359671,
    lat_max: 48.6519642,
  },
  Chernivtsi: {
    lon_min: 25.6214476,
    lon_max: 26.1721802,
    lat_min: 47.9899504,
    lat_max: 48.5238812,
  },
  'Ivano-Frankivsk': {
    lon_min: 24.1834831,
    lon_max: 25.1164627,
    lat_min: 48.40197,
    lat_max: 48.9546355,
  },
  Mykolaiv: {
    lon_min: 31.3247681,
    lon_max: 32.9201889,
    lat_min: 46.863947,
    lat_max: 47.7465958,
  },
  Odesa: {
    lon_min: 30.1241684,
    lon_max: 30.7727051,
    lat_min: 45.8364541,
    lat_max: 47.5973662,
  },
  Vinnytsia: {
    lon_min: 27.9656982,
    lon_max: 29.4986343,
    lat_min: 48.3264685,
    lat_max: 49.5904614,
  },
  'Kyiv city': {
    lon_min: 30.4126453,
    lon_max: 30.6572628,
    lat_min: 50.3429955,
    lat_max: 50.5214763,
  },
};
export const regions = Object.keys(regionsCoordinates);

export function getOpenTripMapUrl(regionName) {
  const { lon_min, lon_max, lat_min, lat_max } = regionsCoordinates[regionName];
  return `https://api.opentripmap.com/0.1/en/places/bbox?lon_min=${lon_min}&lon_max=${lon_max}&lat_min=${lat_min}&lat_max=${lat_max}&src_attr=wikidata&format=json&limit=30&apikey=${process.env.OPEN_TRIP_MAP_API_KEY}`;
}
export function getOpenTripMarPlaceUrl(placexid) {
  return `https://api.opentripmap.com/0.1/en/places/xid/${placexid}?apikey=${process.env.OPEN_TRIP_MAP_API_KEY}`;
}
