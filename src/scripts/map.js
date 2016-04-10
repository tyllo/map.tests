import { L } from 'scripts/commons';

const VLADIVOSTOK = [43.154585165374876, 131.91876228984626];

// tile Layers
var openstreetmap = new L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {});
var googleLayer = new L.Google('ROADMAP');
var yandex = new L.Yandex();

// Определяем карту, координаты центра и начальный масшта
const map = L.map('map').setView(VLADIVOSTOK, 13);

map.addLayer(openstreetmap);
map.addLayer(googleLayer);
map.addLayer(yandex);

// Controls for switch provider map
map.addControl(new L.Control.Layers({
  OpenStreetMap: openstreetmap,
  Google: googleLayer,
  Yandex: yandex,
}));

export default map;
