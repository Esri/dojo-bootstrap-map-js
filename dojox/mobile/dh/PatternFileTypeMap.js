//>>built
define("dojox/mobile/dh/PatternFileTypeMap",["dojo/_base/lang"],function(c){var a={};c.setObject("dojox.mobile.dh.PatternFileTypeMap",a);a.map={".*.html":"html",".*.json":"json"};a.add=function(a,b){this.map[a]=b};a.getContentType=function(a){for(var b in this.map)if(RegExp(b).test(a))return this.map[b];return null};return a});
//@ sourceMappingURL=PatternFileTypeMap.js.map