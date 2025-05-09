//
//  L08S01 - Changing and detecting variable types
//
var i = 21;
var iStr = i.toString(); // toString converts integer to a string, just in case you want the string part
gs.info(typeof i); // 
gs.info(typeof iStr);

var n = parseInt(iStr);
gs.info(typeof n + ' n=' + n);
