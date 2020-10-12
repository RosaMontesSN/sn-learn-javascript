//
// L24S05 - splice(position, n-remove, value1, value2, ..., valueX) - add/remove elements somewhere in the middle
//

var names = ["Eric", "Donna", "Melanie", "Jessie"];

gs.info(names.join(', '));  // *** Script: Eric, Donna, Melanie, Jessie

names.splice(2, 0, "Cary", "Henri");    // ACHTUNG! Destructive!

gs.info(names.join(', '));  // *** Script: Eric, Donna, Cary, Henri, Melanie, Jessie

//~~~~~~~~~~~~~~~~~~~~~~~~~~

var names = ["Eric", "Donna", "Melanie", "Jessie"];

var name = names.splice(2, 1);

gs.info('name = ' + name);      // *** Script: name = Melanie

gs.info('names = ' + names);    // *** Script: names = Eric,Donna,Jessie