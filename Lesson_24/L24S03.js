//
// L24S03 - shift()
//

var list = ['Chuck', 'Kreg', 'Stacey'];

gs.info('Before shift(), list[0]=' + list[0]);  // *** Script: Before shift(), list[0]=Chuck

list.shift();   // ACHTUNG! Destructive!

gs.info('shift: list=' + list.join(', '));      // *** Script: shift: list=Kreg, Stacey

gs.info('After shift(), list[0]=' + list[0]);   // *** Script: After shift(), list[0]=Kreg
