//>>built
define("esri/layers/Domain",["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang"],function(b,c,e,f,d){return b(null,{declaredClass:"esri.layers.Domain",constructor:function(a){a&&c.isObject(a)&&(this.name=a.name,this.type=a.type)},toJson:function(){return d.fixJson({name:this.name,type:this.type})}})});
//@ sourceMappingURL=Domain.js.map