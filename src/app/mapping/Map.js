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

  'bootstrap-map-js/js/bootstrapmap',

  'dojo/text!./templates/Map.html'
], function(declare, array, lang,
  _WidgetBase, _TemplatedMixin,
  Map, Scalebar, WebTiledLayer, HomeButton, LocateButton, Geocoder,
  BootstrapMap,
  template) {
  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,

    postCreate: function() {
      this.inherited(arguments);
      this._initMap();
    },

    _initMap: function() {
      if (this.mapOptions === undefined) {
        this.mapOptions = {};
      }
      if (this.itemId) {
        var mapDeferred = BootstrapMap.createWebMap(this.itemId, this.mapNode, this.mapOptions);
        // Callback to get map
        var getDeferred = function(response) {
          this.map = response.map;
          this._initWidgets();
        };
        mapDeferred.then(lang.hitch(this, getDeferred));
      } else {
        this.map = BootstrapMap.create(this.mapNode, this.mapOptions);
        this._initLayers();
        this._initWidgets();
      }
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
      array.forEach(this.operationalLayers, function(layer) {
        var type = layerTypes[layer.type];
        if (type) {
          modules.push('esri/layers/' + type + 'Layer');
        } else {
          console.log('Layer type not supported: ', layer.type);
        }
      }, this);
      require(modules, lang.hitch(this, function() {
        array.forEach(this.operationalLayers, function(layer) {
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


    // init map widgets if they are in config
    _initWidgets: function() {
      if (!this.widgets) {
        return;
      }

      // scalebar
      if (this.widgets.scalebar) {
        this.scalebar = new Scalebar(lang.mixin({
          map: this.map,
          scalebarUnit: 'dual'
        }, this.widgets.scalebar));
      }

      // home button
      if (this.widgets.homeButton) {
        this.homeButton = new HomeButton(lang.mixin({
          map: this.map
        }, this.widgets.homeButton), this.homeNode);
        this.homeButton.startup();
      }

      // locate button
      if (this.widgets.locateButton) {
        this.locateButton = new LocateButton(lang.mixin({
          map: this.map,
          'class': 'locate-button'
        }, this.widgets.locateButton), this.locateNode);
        this.locateButton.startup();
      }

      // geocoder
      if (this.widgets.geocoder) {
        this.geocoder = new Geocoder(lang.mixin({
          map: this.map,
          'class': 'geocoder'
        }, this.widgets.geocoder), this.searchNode);
        this.geocoder.startup();
      }
    },

    clearBaseMap: function() {
      var map = this.map;
      if (map.basemapLayerIds && map.basemapLayerIds.length > 0) {
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
          map.addLayer(l, 0);
          break;

        case 'MapBox Space':

          options = {
            id: 'mapbox-space',
            copyright: 'MapBox',
            resampling: true,
            subDomains: ['a', 'b', 'c', 'd']
          };
          l = new WebTiledLayer('http://${subDomain}.tiles.mapbox.com/v3/eleanor.ipncow29/${level}/${col}/${row}.jpg', options);
          map.addLayer(l, 0);
          break;

        case 'Pinterest':
          options = {
            id: 'mapbox-pinterest',
            copyright: 'Pinterest/MapBox',
            resampling: true,
            subDomains: ['a', 'b', 'c', 'd']
          };
          l = new WebTiledLayer('http://${subDomain}.tiles.mapbox.com/v3/pinterest.map-ho21rkos/${level}/${col}/${row}.jpg', options);
          map.addLayer(l, 0);
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