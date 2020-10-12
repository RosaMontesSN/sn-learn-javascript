//
// L10S01 - Comparison Operators
//

var a = 0;
var b = 1;

gs.info(a < b);     // true
gs.info(a > b);     // false
gs.info(a >= b);    // false
gs.info(a <= b);    // true
gs.info(a == b);    // false
//gs.info(a = b);   // ACHTUNG! 
gs.info(a != b);    // true

var n = '3';
var i = 3;

gs.info(n == i);    // true  REALLY?!!
gs.info(n === i);   // false

gs.info(i = 4);     // WATCH OUT!!!