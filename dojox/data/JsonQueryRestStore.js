//>>built
define("dojox/data/JsonQueryRestStore",["dojo/_base/declare","dojox/data/JsonRestStore","dojox/data/util/JsonQuery","dojox/data/ClientFilter","dojox/json/query"],function(a,c,d){return a("dojox.data.JsonQueryRestStore",[c,d],{matchesQuery:function(b,a){return b.__id&&-1==b.__id.indexOf("#")&&this.inherited(arguments)}})});
//@ sourceMappingURL=JsonQueryRestStore.js.map