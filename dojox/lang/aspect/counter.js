//>>built
define("dojox/lang/aspect/counter",["dojo","dijit","dojox"],function(a,e,c){a.provide("dojox.lang.aspect.counter");(function(){var d=c.lang.aspect,b=function(){this.reset()};a.extend(b,{before:function(){++this.calls},afterThrowing:function(){++this.errors},reset:function(){this.calls=this.errors=0}});d.counter=function(){return new b}})()});
//@ sourceMappingURL=counter.js.map