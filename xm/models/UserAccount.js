/*jshint trailing:true, white:true, indent:2, strict:true, curly:true, plusplus:true
  immed:true, eqeqeq:true, forin:true, latedef:true, newcap:true, noarg:true, undef:true */
/*jslint bitwise: true, nomen: true, indent:2 */
/*global XT:true, XM:true, Backbone:true, _:true, console:true */

(function () {
  "use strict";

  /**
    @class
  
    @extends XT.Model
  */
  XM.UserAccountInfo = XT.Model.extend({
    /** @scope XM.UserAccountInfo.prototype */

    idAttribute: 'username',

    recordType: 'XM.UserAccountInfo',

    readOnly: true

  });

}());
