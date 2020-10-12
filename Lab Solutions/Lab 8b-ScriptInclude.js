//
// Lab 8b Script Include
//

var SNJS = Class.create();

SNJS.prototype = {
    initialize: function () {},

    getRecords: function (tableName, limit) {

        var answer = [];

        var recGr = new GlideRecord(tableName);
        if (limit && limit > 0) {
            recGr.setLimit(limit);
        }
        recGr.query();

        while (recGr.next()) {
            var obj = {};
            obj.display_value = recGr.getDisplayValue();
            obj.sys_id = recGr.getUniqueValue();

            answer.push(obj);
        }

        return answer;
    },

    type: 'SNJS'
};


// Rosa's code
var RecordFinderUtils = Class.create();

RecordFinderUtils.prototype = {
    initialize: function() {},

    getListRecords: function(tableName, limit) {

        var arr = [];

        var recGr = new GlideRecord(tableName);
        if (limit && limit > 0) {
            recGr.setLimit(limit);
        }
        recGr.query();

        while (recGr.next()) {
            var obj = {};

            obj.display_value = recGr.getDisplayValue();
            obj.sys_id = recGr.getUniqueValue();

            arr.push(obj);
        }

        return arr;
    },

    type: 'RecordFinderUtils'
};