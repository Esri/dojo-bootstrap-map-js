define(['esri/InfoTemplate'], function(InfoTemplate) {
  return {

    mapControls: {
      // **********************************************
      // Example configuration when using a webmap
      // **********************************************

      // example web maps:
      // web map from bootstrap map demo, see
      // http://esri.github.io/bootstrap-map-js/demo/jquery/webmap.html
      // itemId: '68f12b304ad8495eb77fb55243c0ccc2',

      // SoCal running trails
      // GPX tracks embeded in web map as feature collections
      // itemId: 'cbb968b3854e4e4fac3f95c30ca41b38',

      // Los Angeles Bike Paths - KML layer of bike paths
      // itemId: '78ca84d1f2534d3496e63fa80240d4f3',

      // web maps from ArcGIS JSAPI sample pages
      // NOTE: both require a dijit theme (i.e. claro)
      // to support the dojox/charting dijits in the popups

      // Tapastry Segments - dynamic map servce w/ dojox/chart in popup
      // itemId: '4778fee6371d4e83a22786029f30c7e1',

      // mobile web map example, see:
      // https://developers.arcgis.com/javascript/jssamples/mobile_arcgis.html
      itemId: '1e79439598494713b553f990a4040886',

      // NOTE: this is the options sent to arcgisUtils.createMap()
      // see: https://developers.arcgis.com/javascript/jsapi/esri.arcgis.utils-amd.html#createmap
      options: {
        mapOptions: {
          sliderPosition: 'bottom-right'
        }
      },

      // **********************************************
      // Example configuration when NOT using a webmap
      // and loading layers from the settings in this config
      // **********************************************

      // NOTE: this is the options sent to new Map()
      // see: https://developers.arcgis.com/javascript/jsapi/map-amd.html#map1
      // options: {
      //   basemap: 'gray',
      //   center: [-117.1, 33.6],
      //   zoom: 9,
      //   sliderPosition: 'bottom-right'
      // },

      // operationalLayers: [{
      //   type: 'feature',
      //   url: 'http://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Earthquakes/Since_1970/MapServer/0',
      //   title: 'Earthquakes around the world',
      //   options: {
      //     id: 'earthquake',
      //     opacity: 1.0,
      //     visible: true,
      //     outFields: ['*'],
      //     infoTemplate: new InfoTemplate('Earthquake', '${*}'),
      //     mode: 0
      //   }
      // }, {
      //   type: 'dynamic',
      //   url: 'http://sampleserver6.arcgisonline.com/arcgis/rest/services/SF311/MapServer',
      //   title: 'SF311',
      //   options: {
      //     id: 'sf311',
      //     opacity: 0.5,
      //     visible: true
      //   }
      // }, {
      //   type: 'feature',
      //   url: 'http://localhost:6080/arcgis/rest/services/SampleWorldCities/MapServer/0',
      //   title: 'Cities',
      //   options: {
      //     id: 'city',
      //     opacity: 1.0,
      //     visible: true,
      //     outFields: ['*'],
      //     infoTemplate: new InfoTemplate('City', '${*}'),
      //     mode: 0
      //   }
      // }],
      //
      // TODO: add basemaps
      // basemaps: {},

      // set the id of a node to place the legend
      // comment this out if you don't want to show legend
      legendNodeId: 'mapLegend',

      // Add config parameters for each map widget you want to include
      // The map reference will get appended to the options
      // To accept default options just pass empty object {}
      // NOTE: to change the position of these widgets, make changes in map.css
      widgets: {
        scalebar: {
          // see https://developers.arcgis.com/javascript/jsapi/scalebar-amd.html#scalebar1
        },
        homeButton: {
          // see: https://developers.arcgis.com/javascript/jsapi/homebutton-amd.html#homebutton1
        },
        locateButton: {
          // see: https://developers.arcgis.com/javascript/jsapi/locatebutton-amd.html#locatebutton1
        },
        geocoder: {
          // see https://developers.arcgis.com/javascript/jsapi/geocoder-amd.html#geocoder1
          autoComplete: true,
          arcgisGeocoder: {
            placeholder: 'Address or Location'
          },
          'class': 'geocoder'
        }
      }
    },

    // about modal
    aboutModal: {
      moreInfoUrl: 'https://github.com/Esri/dojo-bootstrap-map-js'
    }
  };
});
