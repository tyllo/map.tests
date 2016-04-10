import { L } from 'scripts/commons'
import createMarkerLayer from 'scripts/create-marker-layer';
import createButtonMarker from 'scripts/create-button-marker';
import addLayerEvents from 'scripts/add-layer-events';

const URL = '//kosmosnimki.ru/downloads/tasks_2016/regions_rf.geojson';

export default fetch(URL)
  .then(response => response.json())
  .catch(error => console.log(error))
  .then(createMarkerLayer)
  .then(markerLayer => {
    createButtonMarker({ onClick: addLayerEvents.bind(null, markerLayer) });
  });
