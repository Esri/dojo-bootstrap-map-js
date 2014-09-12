define([
  'dojo/_base/declare',
  'dojo/_base/array',
  'dojo/_base/lang',

  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',

  'esri/map',
  'esri/dijit/Scalebar',
  'esri/layers/WebTiledLayer',
  'esri/dijit/HomeButton',
  'esri/dijit/LocateButton',
  'esri/dijit/Geocoder',

  'components/bootstrapmap/bootstrapmap',

  'dojo/text!./templates/Map.html'
], function(declare, array, lang, 
  _WidgetBase, _TemplatedMixin,
  Map, Scalebar, WebTiledLayer, HomeButton, LocateButton, Geocoder,  
  BootstrapMap,
  template) {
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    editorLayerInfos: [],

    postCreate: function() {
      this.inherited(arguments);
      this._initMap();
    },

    _initMap: function() {
      // if( this.config.map.id ) {
      //   this.map = BootstrapMap.createWebMap(this.config.map.id, this.mapNode, this.config.map.options);  
      // } else {
        this.map = BootstrapMap.create(this.mapNode, this.config.map.options);  
        this._initLayers();
      // }
      this._initWidgets();
    },

    _initLayers: function() {
      this.layers = [];
      var layerTypes = {
        dynamic: 'ArcGISDynamicMapService',
        feature: 'Feature',
        tiled: 'ArcGISTiledMapService'
      };
      // loading all the required modules first ensures the layer order is maintained
      var modules = [];
      array.forEach(this.config.map.operationalLayers, function(layer) {
        var type = layerTypes[layer.type];
        if (type) {
          modules.push('esri/layers/' + type + 'Layer');
        } else {
          console.log('Layer type not supported: ', layer.type);
        }
      }, this);
      require(modules, lang.hitch(this, function() {
        array.forEach(this.config.map.operationalLayers, function(layer) {
          var type = layerTypes[layer.type];
          if (type) {
            require(['esri/layers/' + type + 'Layer'], lang.hitch(this, 'initLayer', layer));
          }
        }, this);
        this.map.addLayers(this.layers);
      }));
    },

    initLayer: function(layer, Layer) {
      var l = new Layer(layer.url, layer.options);      
      this.layers.unshift(l); // unshift instead of push to keep layer ordering on map intact
    },

    _initWidgets: function() {
      this.scalebar = new Scalebar({
        map: this.map,
        scalebarUnit: 'dual'
      });
      this.homeButton = new HomeButton({
        map: this.map
      }, this.homeNode);
      this.homeButton.startup();
      this.geoLocate = new LocateButton({
        map: this.map,
        'class': 'locate-button'
      }, this.locateNode);
      this.geoLocate.startup();
      this.geocoder = new Geocoder({
        map: this.map,
        autoComplete: true,
        'class': 'geocoder'
      }, this.searchNode);
      this.geocoder.startup();
    },

    clearBaseMap: function() {
      var map = this.map;
      if (map.basemapLayerIds.length > 0) {
        array.forEach(map.basemapLayerIds, function(lid) {
          map.removeLayer(map.getLayer(lid));
        });
        map.basemapLayerIds = [];
      } else {
        map.removeLayer(map.getLayer(map.layerIds[0]));
      }
    },

    setBasemap: function(basemapText) {
      var map = this.map;
      var l, options;
      this.clearBaseMap();
      switch (basemapText) {
        case 'Water Color':
          options = {
            id: 'Water Color',
            copyright: 'stamen',
            resampling: true,
            subDomains: ['a', 'b', 'c', 'd']
          };
          l = new WebTiledLayer('http://${subDomain}.tile.stamen.com/watercolor/${level}/${col}/${row}.jpg', options);
          map.addLayer(l);
          break;

        case 'MapBox Space':

          options = {
            id: 'mapbox-space',
            copyright: 'MapBox',
            resampling: true,
            subDomains: ['a', 'b', 'c', 'd']
          };
          l = new WebTiledLayer('http://${subDomain}.tiles.mapbox.com/v3/eleanor.ipncow29/${level}/${col}/${row}.jpg', options);
          map.addLayer(l);
          break;

        case 'Pinterest':
          options = {
            id: 'mapbox-pinterest',
            copyright: 'Pinterest/MapBox',
            resampling: true,
            subDomains: ['a', 'b', 'c', 'd']
          };
          l = new WebTiledLayer('http://${subDomain}.tiles.mapbox.com/v3/pinterest.map-ho21rkos/${level}/${col}/${row}.jpg', options);
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
    }
  });
});