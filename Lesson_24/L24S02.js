//
// L24S02 - join(string)
//

var list = ['Chuck', 'Kreg', 'Stacey'];

gs.info('join: list=' + list.join(', '));   // *** Script: join: list=Chuck, Kreg, Stacey

// push(value1, value2, ..., valueX)
list.push('Dave');
list.push('Andrew');
gs.info('push: list=' + list.join(', '));   // *** Script: push: list=Chuck, Kreg, Stacey, Dave, Andrew

// pop()
list.pop();
gs.info('pop: list=' + list.join(', '));    // *** Script: pop: list=Chuck, Kreg, Stacey, Dave