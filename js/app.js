 require([
          "esri/map",
          "esri/dijit/Scalebar",
          "esri/layers/WebTiledLayer",
          "esri/dijit/LocateButton",
          "esri/dijit/Geocoder",

          "app/bootstrapmap",

          "dojo/query",
          "dojo/touch",

          "bootstrap/Collapse",
          "bootstrap/Dropdown",

          "dojo/domReady!"],
          function(Map, Scalebar, WebTiledLayer, LocateButton, Geocoder,  BootstrapMap, query, touch) {
            // Get a reference to the ArcGIS Map class
            var map = BootstrapMap.create("mapDiv",{
              basemap:'gray',
              center:[-117.1,33.6],
              zoom:9
            });

            var scalebar = new Scalebar({
              map: map,
              scalebarUnit: "dual"
            });

            var geoLocate = new LocateButton({
              map: map
            }, "LocateButton");
            geoLocate.startup();

            var geocoder = new Geocoder({
              map: map
            }, "search");
            geocoder.startup();

            var clearBaseMap = function(map){
              if(map.basemapLayerIds.length > 0){
                dojo.forEach(map.basemapLayerIds, function(lid){
                  console.log('removing ' + lid);
                  map.removeLayer(map.getLayer(lid));
                });
                map.basemapLayerIds = [];
              }else{
                map.removeLayer(map.getLayer(map.layerIds[0]));
              }
            };


            query("#basemapList li").on(touch.press, function(e) {
                e.preventDefault();

                var l, options;
                clearBaseMap(map);
                switch (e.target.text) {
                  case "Water Color":


                   options = {
                      id:'Water Color',
                      copyright: 'stamen',
                      resampling: true,
                      subDomains: ['a','b','c','d']
                    };
                    l = new WebTiledLayer('http://${subDomain}.tile.stamen.com/watercolor/${level}/${col}/${row}.jpg',options);
                    map.addLayer(l);
                    break;

                  case "MapBox Space":

                    options = {
                      id:'mapbox-space',
                      copyright: 'MapBox',
                      resampling: true,
                      subDomains: ['a','b','c','d']
                    };
                    l = new WebTiledLayer('http://${subDomain}.tiles.mapbox.com/v3/eleanor.ipncow29/${level}/${col}/${row}.jpg',options);
                    map.addLayer(l);
                    break;

                  case "Pinterest":
                    options = {
                      id:'mapbox-pinterest',
                      copyright: 'Pinterest/MapBox',
                      resampling: true,
                      subDomains: ['a','b','c','d']
                    };
                    l = new WebTiledLayer('http://${subDomain}.tiles.mapbox.com/v3/pinterest.map-ho21rkos/${level}/${col}/${row}.jpg',options);
                    map.addLayer(l);
                    break;
                  case "Streets":
                    map.setBasemap("streets");
                    break;
                  case "Imagery":
                    map.setBasemap("hybrid");
                    break;
                  case "National Geographic":
                    map.setBasemap("national-geographic");
                    break;
                  case "Topographic":
                    map.setBasemap("topo");
                    break;
                  case "Gray":
                    map.setBasemap("gray");
                    break;
                  case "Open Street Map":
                    map.setBasemap("osm");
                    break;
                }
              });

        });