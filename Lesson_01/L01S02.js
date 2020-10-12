//
// L01S02 - Example Server Side script
//

var gr = new GlideRecord('task');
gr.addActiveQuery();
gr.query();

while (gr.next()) {
    gs.info(gr.getValue('number'));
}

// Rosa's Code
// Search for all active Business Rules for incident table
var gr = new GlideRecord('sys_script');
gr.addActiveQuery();
gr.addQuery('collection', 'incident');
gr.query();

while (gr.next()) {
    gs.info(gr.getValue('name') + '  [' + gr.getValue('collection') + ']');
}