//>>built
define("dojox/charting/plot2d/ClusteredColumns",["dojo/_base/declare","./Columns","./common"],function(b,c,d){return b("dojox.charting.plot2d.ClusteredColumns",c,{getBarProperties:function(){var a=d.calculateBarSize(this._hScaler.bounds.scale,this.opt,this.series.length);return{gap:a.gap,width:a.size,thickness:a.size}}})});
//@ sourceMappingURL=ClusteredColumns.js.map