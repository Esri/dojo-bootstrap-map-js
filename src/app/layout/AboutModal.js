define([
  'dojo/_base/declare',

  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',

  'dojo/text!./templates/AboutModal.html',
  'dojo/i18n!./nls/strings'
], function(
  declare,
  _WidgetBase, _TemplatedMixin,
  template, strings
) {

  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,
    strings: strings,

    _setMoreInfoUrlAttr: {
      node: 'moreInfoNode',
      type: 'attribute',
      attribute: 'href'
    },

    _setTitleAttr: {
      node: 'titleNode',
      type: 'innerHTML'
    },

    _setContentAttr: {
      node: 'contentNode',
      type: 'innerHTML'
    },

    // get default title/content from i18n strings
    postCreate: function() {
      this.set('title', strings.modalAboutTitle);
      this.set('content', '<p>' + strings.modalAboutContent + '</p>');
    }

   });
});