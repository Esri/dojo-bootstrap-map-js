define([
  'dojo/query',
  'dojo/dom',
  'dojo/dom-class',
  'dojo/dom-style',
  'dojo/topic',

  './config',
  './mapping/MapControls',
  './layout/NavBar',
  './layout/AboutModal',

  'dojo-bootstrap/Modal',

  'dojo/domReady!'],
function(
  query, dom, domClass, domStyle, topic,
  config, MapControls, NavBar, AboutModal
) {
  'use strict';
  var app = {};

  // start map
  app.mapControls = new MapControls(config.mapControls, 'mapControls');
  app.mapControls.startup();

  // start nav
  app.navBar = new NavBar({}, 'navBar');
  app.navBar.startup();

  // start about modal
  app.aboutModal = new AboutModal(config.aboutModal, 'aboutModal');
  app.aboutModal.startup();

  // responsive sidebar
  app.sidebar = dom.byId('sidebar');

  // app topics
  // set app title and about text when loading from web map
  topic.subscribe('webmap/load', function(args) {
    var item;
    if (!args.itemInfo && args.itemInfo.item) {
      return;
    }
    item = args.itemInfo.item;
    app.aboutModal.set('title', item.title);
    app.aboutModal.set('content', item.description);
    app.navBar.set('title', item.title);
  });

  // set the basemap
  topic.subscribe('basemap/set', function(args) {
    app.mapControls.setBasemap(args.basemap);
  });

  // toggle the sidebar
  topic.subscribe('sidebar/toggle', function() {
    if (!app.sidebar) {
      return;
    }
    // make sure sidebar is same height as the map
    domStyle.set(app.sidebar, 'height', app.mapControls.map.height + 'px');
    domClass.toggle(window.document.body, 'sidebar-open');
  });

  // show the about modal
  topic.subscribe('about/show', function() {
    query('.about-modal').modal('show');
  });

  return app;
});
