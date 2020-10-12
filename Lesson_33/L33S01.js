//
// L33S01 - Classes, Objects, and Prototypes
//

var Person = Class.create();

Person.prototype = {

    initialize: function () {
        this.firstName = '';
        this.lastName = '';
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

var me = new Person();
me.setFirstName('Chuck');
me.setLastName('Tomasi')

gs.info('me=' + me.firstName + ' ' + me.lastName); // Not advised

var name = me.getDisplayName();
gs.info(name);