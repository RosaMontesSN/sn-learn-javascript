//
// L24S06 -  slice(start, end) - extract part of an array in to another array
//

var names = ["Eric", "Donna", "Melanie", "Jessie", "Howard", "Tomasz"];

gs.info(names.join(', '));  // *** Script: Eric, Donna, Melanie, Jessie, Howard, Tomasz

var subNames = names.slice(1, 3); // Get names at positions 1 and 2

gs.info(subNames.join(', '));   // *** Script: Donna, Melanie

gs.info(names); // *** Script: Eric,Donna,Melanie,Jessie,Howard,Tomasz ==> Non destructive