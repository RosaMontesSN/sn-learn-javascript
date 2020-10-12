//
// L12S01 - The Ternary Operator
//

// Could have written...
var valveOpen = true;
var openStatusString;

if (valveOpen)
  openStatusString = 'open';
else
  openStatusString = 'closed';

gs.info('1: Valve is currently ' + openStatusString);

// Introducing a shortcut way...
var openStatusString = (valveOpen) ? 'open' : 'closed';
gs.info('2: Valve is currently ' + openStatusString);


var isOpenString = 'true';
if (isOpenString)
  gs.info('This is open');

var isOpenString = 'false';
if (isOpenString)
  gs.info('This is open');

// ACHTUNG! It's not working correctly because 'false', 'true' => true !!

// Option A
if (isOpenString == 'true')
  gs.info('This is open');

// Option B
var isOpen = (isOpenString == 'true') ? true : false;

if (isOpen)
  gs.info('This is open');