//>>built
define("dojox/mvc/_base","dojo/_base/kernel dojo/_base/lang ./getStateful ./StatefulModel ./Bind ./_DataBindingMixin ./_patches".split(" "),function(a,f,d,e){a.experimental("dojox.mvc");a=f.getObject("dojox.mvc",!0);a.newStatefulModel=function(b){if(b.data)return d(b.data,e.getStatefulOptions);if(b.store&&f.isFunction(b.store.query)){var c,a=b.store.query(b.query);if(a.then)return a.then(function(a){c=d(a,e.getStatefulOptions);c.store=b.store;return c});c=d(a,e.getStatefulOptions);c.store=b.store;
return c}};return a});
//@ sourceMappingURL=_base.js.map