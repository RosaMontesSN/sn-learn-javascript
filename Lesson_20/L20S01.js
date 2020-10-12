//
// L20S01 - Bad script w/o try/catch
//

for (var i = 0; i < 5; i++) {
  
  gs.info('i=' + i + ' answer=' + answer);  // Evaluator: org.mozilla.javascript.EcmaError: "answer" is not defined.
}

gs.info('done');