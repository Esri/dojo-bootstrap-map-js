//>>built
define("dojox/mobile/_ExecScriptMixin",["dojo/_base/kernel","dojo/_base/declare","dojo/_base/window","dojo/dom-construct"],function(c,d,e,f){return d("dojox.mobile._ExecScriptMixin",null,{execScript:function(a){a=a.replace(/\f/g," ").replace(/<\/script>/g,"\f");a=a.replace(/<script [^>]*src=['"]([^'"]+)['"][^>]*>([^\f]*)\f/ig,function(a,b){f.create("script",{type:"text/javascript",src:b},e.doc.getElementsByTagName("head")[0]);return""});return a=a.replace(/<script>([^\f]*)\f/ig,function(a,b){c.eval(b);
return""})}})});
//@ sourceMappingURL=_ExecScriptMixin.js.map