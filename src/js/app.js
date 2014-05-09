require([
  'dojo/_base/array',
  'dojo/query',
  'dojo/touch',

  'esri/map',
  'esri/dijit/Scalebar',
  'esri/layers/WebTiledLayer',
  'esri/dijit/LocateButton',
  'esri/dijit/Geocoder',

  'components/bootstrapmap/bootstrapmap',

  'app/config',

  'bootstrap/Collapse',
  'bootstrap/Dropdown',

  'dojo/domReady!'],
function(
  array, query, touch,
  Map, Scalebar, WebTiledLayer, LocateButton, Geocoder,
  BootstrapMap,
  config
) {
  'use strict';
    var map = BootstrapMap.create('mapDiv', config.map.options);

    var scalebar = new Scalebar({
      map: map,
      scalebarUnit: 'dual'
    });
    console.log(scalebar);

    var geoLocate = new LocateButton({
      map: map
    }, 'LocateButton');
    geoLocate.startup();

    var geocoder = new Geocoder({
      map: map
    }, 'search');
    geocoder.startup();

    var clearBaseMap = function(map){
      if(map.basemapLayerIds.length > 0){
        array.forEach(map.basemapLayerIds, function(lid){
          map.removeLayer(map.getLayer(lid));
        });
        map.basemapLayerIds = [];
      }else{
        map.removeLayer(map.getLayer(map.layerIds[0]));
      }
    };

    query('#basemapList li').on(touch.press, function(e) {
        e.preventDefault();

        var l, options;
        clearBaseMap(map);
        switch (e.target.text) {
          case 'Water Color':
           options = {
              id:'Water Color',
              copyright: 'stamen',
              resampling: true,
              subDomains: ['a','b','c','d']
            };
            l = new WebTiledLayer('http://${subDomain}.tile.stamen.com/watercolor/${level}/${col}/${row}.jpg',options);
            map.addLayer(l);
            break;

          case 'MapBox Space':

            options = {
              id:'mapbox-space',
              copyright: 'MapBox',
              resampling: true,
              subDomains: ['a','b','c','d']
            };
            l = new WebTiledLayer('http://${subDomain}.tiles.mapbox.com/v3/eleanor.ipncow29/${level}/${col}/${row}.jpg',options);
            map.addLayer(l);
            break;

          case 'Pinterest':
            options = {
              id:'mapbox-pinterest',
              copyright: 'Pinterest/MapBox',
              resampling: true,
              subDomains: ['a','b','c','d']
            };
            l = new WebTiledLayer('http://${subDomain}.tiles.mapbox.com/v3/pinterest.map-ho21rkos/${level}/${col}/${row}.jpg',options);
            map.addLayer(l);
            break;
          case 'Streets':
            map.setBasemap('streets');
            break;
          case 'Imagery':
            map.setBasemap('hybrid');
            break;
          case 'National Geographic':
            map.setBasemap('national-geographic');
            break;
          case 'Topographic':
            map.setBasemap('topo');
            break;
          case 'Gray':
            map.setBasemap('gray');
            break;
          case 'Open Street Map':
            map.setBasemap('osm');
            break;
        }
        // hide nav dropdown on mobile
        if (query('.navbar-collapse.in').length > 0) {
          e.stopPropagation();
          query('.navbar-toggle')[0].click();
        }
      });

});