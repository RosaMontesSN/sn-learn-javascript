//
// L15S03 - Continue - jumping back to the while condition
//

var i = 0;
var done = false;

while (!done) {
  if (i < 5) {
    //++i;

    //gs.info(i++ + ' done=' + done); // 0 1 2 3 4
    gs.info(++i + ' done=' + done); // 1 2 3 4 5

    continue;
  }

  gs.info('I think we are done');

  done = true;
}

gs.info(i);