//>>built
define("dojox/color/MeanColorModel",["dojo/_base/array","dojo/_base/declare","./NeutralColorModel"],function(e,b,c){return b("dojox.color.MeanColorModel",c,{constructor:function(d,b){},computeNeutral:function(d,b,c,a){0!=a.length&&(d=3>a.length?c/a.length:0==(a.length&1)?(a[a.length/2-1]+a[a.length/2])/2:a[Math.floor(a.length/2)]);return d}})});
//@ sourceMappingURL=MeanColorModel.js.map