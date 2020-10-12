//
// L19S06 - Self running function
//

// This code is outside the function
var i = 20;

(function () {

  // Local variable
  i = 10; // uh-oh, forgot the var!

  gs.info('i=' + i); // 10

}());

gs.info('i=' + i); // 10

i = 3;

gs.info('i=' + i); // 3