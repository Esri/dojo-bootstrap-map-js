//>>built
define("dojox/mvc/Bind",["dojo/_base/lang","dojo/_base/array"],function(d,e){var l=d.getObject("dojox.mvc",!0);return d.mixin(l,{bind:function(a,c,b,g,h,e){var f;return a.watch(c,function(a,c,k){f=d.isFunction(h)?h(k):k;(!e||f!=b.get(g))&&b.set(g,f)})},bindInputs:function(a,c){var b=[];e.forEach(a,function(a){b.push(a.watch("value",c))});return b}})});
//@ sourceMappingURL=Bind.js.map