define(['dojo/topic',

  './config',
  './mapping/Map',
  './layout/NavBar',

  'dojo/domReady!'],
function(
  topic,
  config, Map, NavBar
) {
  'use strict';
  var app = {};

  // start map widget
  app.map = new Map(config.map, 'mapNode');
  app.map.startup();

  // start nav widget
  app.navBar = new NavBar(config.navBar, 'navBarNode');
  app.navBar.startup();

  // set up topics
  topic.subscribe('basemap/set', function(args) {
    app.map.setBasemap(args.basemap);
  });

  // set page title
  window.document.title = app.navBar.strings.appTitle;

  return app;
});
