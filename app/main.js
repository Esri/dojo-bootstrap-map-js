define(['dojo/topic',

  'app/config',
  'app/widget/Map',
  'app/widget/NavBar',

  'dojo/i18n!app/nls/strings',

  'dojo/domReady!'],
function(
  topic,
  config, Map, NavBar,
  strings
) {
  'use strict';
  var app = {};

  // start map widget
  app.map = new Map({
    config: config,
    strings: strings
  }, 'mapNode');
  app.map.startup();

  // start nav widget
  var navBar = new NavBar({
    config: config,
    strings: strings
  }, 'navBarNode');
  navBar.startup();

  // set up topics
  topic.subscribe('basemap/set', function(args) {
    app.map.setBasemap(args.basemap);
  });

  // set page title
  window.document.title = strings.appTitle;

  return app;
});
