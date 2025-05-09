//
//  L08S01 - Changing and detecting variable types
//
var i = 21;
var iStr = i.toString(); // i.toString converts an integer to a string, toString converts something to the string part
gs.info(typeof i); // what type of?
gs.info(typeof iStr);

var n = parseInt(iStr); // parseInt converts string to an integer
gs.info(typeof n + ' n=' + n);
