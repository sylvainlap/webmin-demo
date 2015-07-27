/**
* SuperSecret.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    // primitive attributes
    mySuperSecret: { type: 'string' },

    // attribute methods
    isWebminVisible: function () {
      // false if you don't want this model in your webmin panel, true otherwise
      return false;
    }
  }
};
