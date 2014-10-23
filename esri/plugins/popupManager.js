//>>built
define("esri/plugins/popupManager",["../PopupManager"],function(c){return{add:function(a,b){a.popupManager||(a.popupManager=new c(b),a.popupManager.setMap(a))},remove:function(a){var b=a.popupManager;b&&(b.unsetMap(),a.popupManager=void 0)}}});
//@ sourceMappingURL=popupManager.js.map