//>>built
define("dojox/mvc/resolve",["dojo/_base/lang","dijit/registry","dojo/Stateful"],function(c,e){return c.setObject("dojox.mvc.resolve",function(a,d){if("string"==typeof a){var b=a.match(/^(expr|rel|widget):(.*)$/)||[];try{a="rel"==b[1]?c.getObject(b[2]||"",!1,d):"widget"==b[1]?e.byId(b[2]):c.getObject(b[2]||a,!1,d)}catch(f){}}return a})});
//@ sourceMappingURL=resolve.js.map