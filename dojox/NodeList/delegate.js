//>>built
define("dojox/NodeList/delegate",["dojo/_base/lang","dojo/query","dojo/_base/NodeList","dojo/NodeList-traverse"],function(a,c){var b=c.NodeList;a.extend(b,{delegate:function(b,a,e){return this.connect(a,function(a){var d=c(a.target).closest(b,this);d.length&&e.call(d[0],a)})}});return b});
//@ sourceMappingURL=delegate.js.map