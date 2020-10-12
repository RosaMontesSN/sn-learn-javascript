//
// S11S01 - If Statements
//

var a = 1;
var b = 3;
var c = 5;

if (a < b)
  gs.info('a is less than b');
gs.info('Chuck was here'); // Always printed

if (a < b) {
  gs.info('a is less than b');
  gs.info('Chuck was here');
}

var bool = a < b;
if (bool) {
  gs.info('a is less than b');
  gs.info('Chuck was here');
}

// else
if (a < b)
  gs.info('a is less than b');
else
  gs.info('a is greater than or equal to b');

if (a < b) {
  gs.info('a is less than b');
} else
  gs.info('a is NOT less than b');

// Else if and else
if (a < b)
  gs.info('a is less than b');
else if (a > b)
  gs.info('a is greater than b');
else if (a == b)
  gs.info('a equals b');
else
  gs.info('Uh-oh');

if (a < b)
  if (b < c)
    gs.info('a b c are in order');