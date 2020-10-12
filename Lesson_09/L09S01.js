//
// L09S01 - Commenting
//

// This is a single line comment
var name = 'Chuck Tomasi';  // <== Define your name here

/* This is another way to comment */
gs.info('name = ' + name);

/*
 anything between star-slash and slash-star
  is considered a comment
*/

/*
 This is a multi-line comment.
 This code is commented out!
 var name = 'Chuck';
 */
gs.info('name = ' + name);  // Evaluator: org.mozilla.javascript.EcmaError: "name" is not defined.