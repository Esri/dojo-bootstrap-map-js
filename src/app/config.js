define(['esri/InfoTemplate'], function(InfoTemplate) {
  return {
    map: {
      //id: '3fdacfb3d72c4bd1a5e74a6730a955cc',
      id: '4778fee6371d4e83a22786029f30c7e1',
      //
      // uncomment these options if you do not use a webmap id
      options: {
      //   basemap: 'gray',
      //   center: [-117.1, 33.6],
      //   zoom: 9
      },
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
      basemaps: {}
    },
    about: {
      moreInfoUrl: 'https://github.com/Esri/dojo-bootstrap-map-js'
    }
  };
});