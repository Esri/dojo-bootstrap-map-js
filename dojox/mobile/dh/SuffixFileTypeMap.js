//>>built
define("dojox/mobile/dh/SuffixFileTypeMap",["dojo/_base/lang"],function(b){var a={};b.setObject("dojox.mobile.dh.SuffixFileTypeMap",a);a.map={html:"html",json:"json"};a.add=function(a,b){this.map[a]=b};a.getContentType=function(a){a=(a||"").replace(/.*\./,"");return this.map[a]};return a});
//@ sourceMappingURL=SuffixFileTypeMap.js.map