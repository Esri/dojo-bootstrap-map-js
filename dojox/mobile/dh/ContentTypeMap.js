//>>built
define("dojox/mobile/dh/ContentTypeMap",["dojo/_base/lang"],function(b){var a={};b.setObject("dojox.mobile.dh.ContentTypeMap",a);a.map={html:"dojox/mobile/dh/HtmlContentHandler",json:"dojox/mobile/dh/JsonContentHandler"};a.add=function(a,b){this.map[a]=b};a.getHandlerClass=function(a){return this.map[a]};return a});
//@ sourceMappingURL=ContentTypeMap.js.map