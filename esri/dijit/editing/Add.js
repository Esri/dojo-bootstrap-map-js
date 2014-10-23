//>>built
define("esri/dijit/editing/Add",["dojo/_base/declare","dojo/_base/lang","dojo/has","../../kernel","../../OperationBase"],function(b,d,e,f,c){return b(c,{declaredClass:"esri.dijit.editing.Add",type:"edit",label:"Add Features",constructor:function(a){a=a||{};a.featureLayer&&(this._featureLayer=a.featureLayer,a.addedGraphics&&(this._addedGraphics=a.addedGraphics))},performUndo:function(){this._featureLayer.applyEdits(null,null,this._addedGraphics)},performRedo:function(){this._featureLayer.applyEdits(this._addedGraphics,
null,null)}})});
//@ sourceMappingURL=Add.js.map