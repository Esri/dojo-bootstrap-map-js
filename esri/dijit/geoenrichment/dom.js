//>>built
define("esri/dijit/geoenrichment/dom",["dojo/dom-construct","dijit/registry"],function(f,e){return{text:function(a,b){a.appendChild(document.createTextNode(b))},clear:function(a){if(a){var b=e.findWidgets(a);if(b)for(var c=0;c<b.length;c++)b[c].destroy();a.innerHTML=""}},pct:function(a){return(100*a).toFixed(2)+"%"},head:function(){return document.getElementsByTagName("head")[0]},createCols:function(a,b){for(var c=f.create("colgroup",null,a),d=0;d<b.length;d++){var e=f.create("col",null,c);b[d]&&
(e.style.width=this.pct(b[d]))}}}});
//@ sourceMappingURL=dom.js.map