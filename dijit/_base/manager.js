//>>built
define("dijit/_base/manager",["dojo/_base/array","dojo/_base/config","dojo/_base/lang","../registry","../main"],function(d,e,a,f,c){var b={};d.forEach("byId getUniqueId findWidgets _destroyAll byNode getEnclosingWidget".split(" "),function(a){b[a]=f[a]});a.mixin(b,{defaultDuration:e.defaultDuration||200});a.mixin(c,b);return c});
//@ sourceMappingURL=manager.js.map