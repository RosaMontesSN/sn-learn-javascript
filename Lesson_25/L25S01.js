//
// L25S01 - ArrayUtil
//

var au = new ArrayUtil(); // Script Include: ArrayUtil

var names = [
  "Eric",
  "Donna",
  "Melanie",
  "Jessie",
  "Howard",
  "Eric",
  "Jessie",
  "Tomasz"
];

var newNames = au.unique(names);

gs.info(newNames.join(', ')); // *** Script: Donna, Melanie, Howard, Eric, Jessie, Tomasz