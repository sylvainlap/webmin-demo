/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    // primitive attributes
    title: { type: 'string' },
    subtitle: { type: 'string' },
    content: { type: 'text' },

    // attribute methods
    isWebminVisible: function () {
      // false if you don't want this model in your webmin panel, true otherwise
      return true;
    },
    getWebminColumns: function () {
      // return the attributes to be in the table in the webmin panel
      return [ 'title', 'subtitle' ];
    }
  }
};
