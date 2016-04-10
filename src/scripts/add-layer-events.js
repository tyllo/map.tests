import { L } from 'scripts/commons';
import map from 'scripts/map';

const EVENT = {
  CLICK: 'Event: click on layer',
  OVER:  'Event: over of layer',
};

var marker;

export default function addLayerEvents(markerLayer) {
  marker = null;

    map.on('mousemove', onMousemove);
  map.on('click',             onClick.bind(null, { eventName: EVENT.CLICK, markerLayer }));
  markerLayer.on('click',     onClick.bind(null, { eventName: EVENT.CLICK, markerLayer }));
  markerLayer.on('mouseover', onClick.bind(null, { eventName: EVENT.OVER,  markerLayer }));
  return markerLayer;
};

// handler for mousemove
function onMousemove({ latlng }) {
  if (!marker) {
    marker = L.marker(latlng).addTo(map);
  } else {
    marker.setLatLng(latlng);
  };
};

// handler for click or mouseout
function onClick({ eventName, markerLayer }, { layer, latlng }) {

  var NAME_LAT;

  try {
    NAME_LAT = layer.feature.properties.NAME_LAT;
  } catch (e) {
    NAME_LAT = '';
  }

  var popupText = `
    <b>${ eventName }</b>
    <br>${ NAME_LAT }
    <br>lat: ${ latlng.lat }
    <br>lng: ${ latlng.lng }
  `;

  marker.bindPopup(popupText);
  marker = null;

  markerLayer.off();
  map.off('mousemove', onMousemove);
  map.off('click', onClick);
};
