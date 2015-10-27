
var Rhonda = [43.154585165374876,131.91876228984626]

//Определяем карту, координаты центра и начальный масштаб
var map = L.map('map').setView(Rhonda, 13);

// tile Layers
var openstreetmap = new L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {})
var googleLayer = new L.Google('ROADMAP')
var yandex = new L.Yandex()

map.addLayer(openstreetmap)

// Control
map.addControl(new L.Control.Layers({
  OpenStreetMap: openstreetmap,
  Google: googleLayer,
  Yandex: yandex,
}))

// добавим маркет
var marker = L.marker(Rhonda).addTo(map)
marker.bindPopup('<b>Ронда Лимитед</b><br>IT и Интернет').openPopup()

// define rectangle geographical bounds
// границ Владивостока не знаю, выбрал на глаз
var bounds = [[43.06761796692071,131.8127085173387],[43.26564691728922,132.1029879057665]]

// create an rectangle
L.rectangle(bounds, {
  color: 'blue',
  weight: 3,
  opacity: 1,
  fill: false,
}).addTo(map)

// zoom the map to the rectangle bounds
map.fitBounds(bounds)
