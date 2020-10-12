//
// L24S09 - Getting the value
//

var list = [];

var incGr = new GlideRecord('incident');
incGr.addQuery('priority', '1');
incGr.query();

while (incGr.next()) {

    list.push(incGr.getValue('sys_id'));
}

gs.info('list=\n' + list.join('\n'));

/*
*** Script: list=
9c573169c611228700193229fff72400
9d385017c611228701d22104cc95c371
e8caedcbc0a80164017df472f39eaed1
9d3c1197c611228701cd1d94bc32d76d
e8e875b0c0a80164009dc852b4d677d5
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ACHTUNG!!!

var list = [];

var incGr = new GlideRecord('incident');
incGr.addQuery('priority', '1');
incGr.query();

while (incGr.next()) {

    list.push(incGr.sys_id);
}

gs.info('list=\n' + list.join('\n'));

/*
*** Script: list=
e8e875b0c0a80164009dc852b4d677d5
e8e875b0c0a80164009dc852b4d677d5
e8e875b0c0a80164009dc852b4d677d5
e8e875b0c0a80164009dc852b4d677d5
e8e875b0c0a80164009dc852b4d677d5
*/