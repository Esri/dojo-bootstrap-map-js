//>>built
define("dojox/charting/plot2d/ClusteredBars",["dojo/_base/declare","./Bars","./common"],function(b,c,d){return b("dojox.charting.plot2d.ClusteredBars",c,{getBarProperties:function(){var a=d.calculateBarSize(this._vScaler.bounds.scale,this.opt,this.series.length);return{gap:a.gap,height:a.size,thickness:a.size}}})});
//@ sourceMappingURL=ClusteredBars.js.map