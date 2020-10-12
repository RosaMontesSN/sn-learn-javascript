//
// L14S03 - Truthy and Falsy
//

// Take a look at strings
//
var string1;
var string2 = null;
var string3 = 'Hello, world!';

gs.info('string1=' + ((string1) ? 'true' : 'false'));   // false (undefined)
gs.info('string2=' + ((string2) ? 'true' : 'false'));   // false (null)
gs.info('string3=' + ((string3) ? 'true' : 'false'));   // true

if (string1) {
    gs.info('string1 has something valid'); // (shows nothing)
}

if (string3) {
    gs.info('string3 has something valid'); // string3 has something valid
}

// undefined, null, '' ==> false