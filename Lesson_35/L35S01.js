//
// L35S01 - Inheritance
//

var Vehicle = Class.create();

Vehicle.prototype = {
    
    initialize: function (year, make, model) {
        this.make = make;
        this.model = model;
        this.year = year;
    },

    register: function () {
        gs.info(this.getDisplayName() + ' registered!');
    },

    info: function () {
        gs.info('Vehicle info: TBD');
    },

    getDisplayName: function () {
        return this.year + ' ' + this.make + ' ' + this.model;
    },

    type: 'Vehicle'
};

var Car = Class.create();

Car.prototype = Object.extendsObject(Vehicle, {

    findDealer: function () {
        gs.info('Find dealer is not yet implemented');
    },

    info: function () {
        gs.info('Car info: TBD');
    },

    type: 'Car'
});

var v1 = new Vehicle('2018', 'John Deere', 'Tractor');
v1.register();
v1.info();

var v2 = new Car('2017', 'Honda', 'CR-V');
v2.register();
v2.info();
v2.findDealer();