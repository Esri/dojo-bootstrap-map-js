//>>built
define("esri/tasks/geoenrichment/ReportParameters",["../../declare","./EnrichParametersBase"],function(b,c){return b("esri.tasks.geoenrichment.ReportParameters",[c],{reportID:null,format:"pdf",fields:null,constructor:function(a){a&&(this.reportID=a.report||a.reportID||null,this.format=a.format,this.fields=a.reportFields||a.fields||null)},toJson:function(){var a=this.inherited(arguments);this.reportID&&(a.report=this.reportID);this.format&&(a.format=this.format);this.fields&&(a.reportFields=this.fields);
return a}})});
//@ sourceMappingURL=ReportParameters.js.map