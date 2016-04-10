import { L } from 'scripts/commons';
import map from 'scripts/map';

export default function createLayer(data) {
  return L.geoJson(data, {
    // style: feature => ({ color: feature.properties.color }),
    style: {
      color: 'red',
      weight: 2,
      fill: false,
    },
  }).addTo(map);
}
