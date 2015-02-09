define(['esri/InfoTemplate'], function(InfoTemplate) {
  return {
    map: {
      // if id is set, map will load from a webmap
      // comment this out if you want to load layers from config below
      itemId: '4778fee6371d4e83a22786029f30c7e1',

      // NOTE: if using a webmap (e.g. via id)
      // this is the options sent to arcgisUtils.createMap()
      // see: https://developers.arcgis.com/javascript/jsapi/esri.arcgis.utils-amd.html#createmap
      // otherwise it is the options sent to new Map()
      // see: https://developers.arcgis.com/javascript/jsapi/map-amd.html#map1
      mapOptions: {
        scrollWheelZoom: true
      },
      // uncomment these options if you do not use a webmap id
      // options: {
      //    basemap: 'gray',
      //    center: [-117.1, 33.6],
      //    zoom: 9,
      // }
      //
      // uncomment these section if you do not use a webmap id
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
    navBar: {
      moreInfoUrl: 'https://github.com/Esri/dojo-bootstrap-map-js'
    }
  };
});