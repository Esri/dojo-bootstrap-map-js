//>>built
define("dojo/promise/tracer",["../_base/lang","./Promise","../Evented"],function(e,f,g){function c(a){setTimeout(function(){h.apply(d,a)},0)}var d=new g,h=d.emit;d.emit=null;f.prototype.trace=function(){var a=e._toArray(arguments);this.then(function(b){c(["resolved",b].concat(a))},function(b){c(["rejected",b].concat(a))},function(b){c(["progress",b].concat(a))});return this};f.prototype.traceRejected=function(){var a=e._toArray(arguments);this.otherwise(function(b){c(["rejected",b].concat(a))});return this};
return d});
//@ sourceMappingURL=tracer.js.map