//>>built
define("dojox/form/manager/_ClassMixin",["dojo/_base/lang","dojo/_base/kernel","dojo/dom-class","./_Mixin","dojo/_base/declare"],function(d,k,e,l,g){d=d.getObject("dojox.form.manager",!0);var f=d.actionAdapter,h=d.inspectorAdapter;return g("dojox.form.manager._ClassMixin",null,{gatherClassState:function(b,a){return this.inspect(h(function(a,c){return e.contains(c,b)}),a)},addClass:function(b,a){this.inspect(f(function(a,c){e.add(c,b)}),a);return this},removeClass:function(b,a){this.inspect(f(function(a,
c){e.remove(c,b)}),a);return this}})});
//@ sourceMappingURL=_ClassMixin.js.map