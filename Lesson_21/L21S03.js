//
// L21S03 - What is 'number’?
//

var incGr = new GlideRecord('incident');
incGr.setLimit(1);
incGr.query();

if (incGr.next()) {

  var dotNumber = incGr.number;
  var gvNumber  = incGr.getValue('number');

  gs.info('dotNumber=' + typeof dotNumber + ' gvNumber=' + typeof gvNumber);

  gs.info(dotNumber + ' -- ' + gvNumber);
}

// Why should I care? I'll show you when we get to arrays...


// Rosa's code
gs.info(Array.sort(Object.keys(incGr)));  // Returns an ordered array with all the attribute names of the table