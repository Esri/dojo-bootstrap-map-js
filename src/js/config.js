define(['esri/InfoTemplate', ], function(InfoTemplate) {
	return {
    map: {
      //id: '2bf2cde975ae4362aef17790eb041fcb',
      options: {
        basemap: 'gray',
        center: [-117.1,33.6],
        zoom: 9
      },
      // TODO: add basemaps
      basemaps: {
      },
      // TODO: add operationallayers
      operationalLayers: [{
        type: 'feature',
        url: 'http://services1.arcgis.com/g2TonOxuRkIqSOFx/arcgis/rest/services/MeetUpHomeTowns/FeatureServer/0',
        title: 'STLJS Meetup Home Towns',
        options: {
          id: 'meetupHometowns',
          opacity: 1.0,
          visible: true,
          outFields: ['*'],
          infoTemplate: new InfoTemplate('Hometown', '${*}'),
          mode: 0
        }
      }, {
        type: 'feature',
        url: 'http://localhost:6080/arcgis/rest/services/SampleWorldCities/MapServer/0',
        title: 'Cities',
        options: {
          id: 'city',
          opacity: 1.0,
          visible: true,
          outFields: ['*'],
          infoTemplate: new InfoTemplate('City', '${*}'),
          mode: 0
        }
      }, {
        type: 'dynamic',
        url: 'http://sampleserver6.arcgisonline.com/arcgis/rest/services/DamageAssessment/MapServer',
        title: 'Damage Assessment',
        options: {
          id: 'DamageAssessment',
          opacity: 0.5,
          visible: true
        }
      }],
    },
    about: {
      moreInfoUrl: 'https://github.com/Esri/dojo-bootstrap-map-js'
    }
  };
});