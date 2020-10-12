// 
// L24S04 - unshift
//

var list = ['Chuck', 'Kreg', 'Stacey'];

var newLength = list.unshift('Jason', 'Andrew');

gs.info('new length=' + newLength + ' unshift() list=' + list.join(', '));  // *** Script: new length=5 unshift() list=Jason, Andrew, Chuck, Kreg, Stacey