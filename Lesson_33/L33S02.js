//
// L33S02 - Initialize values
//

var Person = Class.create();

Person.prototype = {
    
    initialize: function (str1, str2) {
        this.firstName = str1;
        this.lastName = str2;
    },

    setFirstName: function (str) {
        this.firstName = str;
    },

    setLastName: function (str) {
        this.lastName = str;
    },

    getDisplayName: function () {
        return this.firstName + ' ' + this.lastName;
    },

    type: 'Person'
};

var me = new Person('Chuck', 'Tomasi');
var name = me.getDisplayName();
gs.info(name);

me.setFirstName('Fred');
me.setLastName('Luddy');
gs.info(me.getDisplayName());