//
// L34S01 - Passing objects to functions
//

var Item = Class.create();

Item.prototype = {
    
    initialize: function () {},

    debugObject: function (obj) {
        gs.info('object=' + JSON.stringify(obj, null, 4));
    },

    type: 'Item'
};

var myObj = {
    "type": "vehicle",
    "engine": true,
    "wheels": 4,
    "state": "allocated"
};

var myItem = new Item();

myItem.debugObject(myObj); // Loosely coupled