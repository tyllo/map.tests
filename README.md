Тестовое задание
===================

Загружаем в формате GeoJSON и показываем на карте слой с границами РФ [данные OSM](http://kosmosnimki.ru/downloads/tasks_2016/regions_rf.geojson)

**Предоставляем пользователю инструмент рисования маркера "с прилипанием" к загруженной геометрии:**
- Пользователь нажимает на кнопку на страничке - под курсором появляется маркер, который перемещается вслед за курсором.
- При приближении курсора к загруженной геометрии меньше чем на 3-4 пикселя маркер “прилипает” к геометрии (к ближайшей точке на линии геометрии).
- При клике маркер фиксируется на карте.


----------
###Установка

- Установите [Nodejs](https://nodejs.org) и пакетный менеджер [npm](https://www.npmjs.com)
- Установите пакеты
```
$ npm install -g gulp
```
- Клонируйте репозиторий или скопируйте на диск и [разархивируйте](https://github.com/tyllo/map.tests/archive/master.zip):
```
$ git clone git@github.com:tyllo/map.tests.git test
```
-  Зайдите в папку проекта
```
$ cd test
```
- Установите все зависимости проекта,
автоматом создаться папка [build](https://github.com/tyllo/map.tests/tree/gh-pages) с собранным проектом
```
$ npm install
```

----------
###Разработка

- Пересобрать проект:
```
$ gulp build
```
- Пересобрать проект с SourceMaps:
```
$ gulp build --debug
```
- Запустить вотчеры и локальный вебсервер [localhost:8080](http://localhost:8080):
```
$ gulp
```
----------
###Особенности

- [Jade](http://jade-lang.com), [Sass](http://sass-lang.com), [Webpack](https://webpack.github.io), [Gulp](http://gulpjs.com)
- [LeafletJS](http://leafletjs.com), [Leaflet EasyButton](https://github.com/CliffCloud/Leaflet.EasyButton), [Ionicons](http://ionicons.com), ES2015
