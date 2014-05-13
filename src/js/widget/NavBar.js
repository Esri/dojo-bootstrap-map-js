define([
  'dojo/_base/declare',
  'dojo/query',
  'dojo/touch',
  'dojo/topic',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!./templates/NavBar.html'
], function(declare, query, touch, topic, _WidgetBase, _TemplatedMixin, template) {
  return declare([_WidgetBase, _TemplatedMixin], {
      templateString: template,

      postCreate: function() {
        this.inherited(arguments);
        this._attachEventHandlers();
      },

      _attachEventHandlers: function() {
        var _this = this;
        query('.basemap-list li', this.domNode).on(touch.press, function(e) {
          e.preventDefault();
          topic.publish('basemap/set', {
            basemap: e.target.text
          });
          // hide nav dropdown on mobile
          if (query('.navbar-collapse.in', _this.domNode).length > 0) {
            e.stopPropagation();
            query('.navbar-toggle', _this.domNode)[0].click();
          }
        });
      }
   });
});