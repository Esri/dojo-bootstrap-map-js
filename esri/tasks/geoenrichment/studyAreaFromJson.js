//>>built
define("esri/tasks/geoenrichment/studyAreaFromJson",["./GeometryStudyArea","./AddressStudyArea","./StandardGeographyStudyArea","../../extend"],function(c,d,e,f){var b=function(a){if(a.geometry)return new c(a);if(a.address)return new d(a);if(a.layer)return new e(a)};f("esri.tasks.geoenrichment.studyAreaFromJson",b);return b});
//@ sourceMappingURL=studyAreaFromJson.js.map