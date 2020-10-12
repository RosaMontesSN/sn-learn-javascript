//
// L19S04 - Local variables scope
//

function toCelsius(fahrenheit) {

    // c is only known in the function toCelsius()
    var c = (5 / 9) * (fahrenheit - 32);

    return c;
}

gs.info(c); // What happened?  // Evaluator: org.mozilla.javascript.EcmaError: "c" is not defined.