//>>built
define("esri/tasks/DataLayer","dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../lang ../geometry/jsonUtils ./SpatialRelationship".split(" "),function(a,c,g,h,d,e,f){a=a(null,{declaredClass:"esri.tasks.DataLayer",name:null,where:null,geometry:null,spatialRelationship:null,toJson:function(){var a={type:"layer",layerName:this.name,where:this.where,spatialRel:this.spatialRelationship},b=this.geometry;b&&(a.geometryType=e.getJsonType(b),a.geometry=b.toJson());return d.filter(a,function(a){if(null!==
a)return!0})}});c.mixin(a,f);return a});
//@ sourceMappingURL=DataLayer.js.map