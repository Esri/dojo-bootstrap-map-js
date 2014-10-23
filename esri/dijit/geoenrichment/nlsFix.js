//>>built
define("esri/dijit/geoenrichment/nlsFix",["dojo/_base/config","dojo/i18n"],function(d,e){return{load:function(k,f,g){var h=function(c,a){for(var b in c)"object"===typeof a[b]?h(c[b],a[b]):void 0===a[b]&&(a[b]=c[b])};d.locale?e.load("esri/nls/en/jsapi",f,function(c){e.load("esri/nls/"+d.locale+"/jsapi",f,function(a){h(c,a);g()})}):g()}}});
//@ sourceMappingURL=nlsFix.js.map