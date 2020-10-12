//
//  L08S01 - Changing and detecting variable types
//

var i = 5;
var iStr = i.toString();

gs.info('typeof i = ' + typeof i);          // number
gs.info('typeof iStr = ' + typeof iStr);    // string

var n = parseInt(iStr);
gs.info(typeof n + ', n=' + n);     // number, n=5

var f = parseFloat(iStr);
gs.info('f = ' + f);                // f = 5

gs.info('n + i = ' + (n + i));      // n + i = 10
gs.info('n + i = ' + (n + iStr));   // n + i = 55


// Rosa's Code
var n = '23';

// To convert into a number
var i = n * 1;
gs.info(typeof i);  // number

// To convert into a number
var s = i + '';
gs.info(typeof s);  // string