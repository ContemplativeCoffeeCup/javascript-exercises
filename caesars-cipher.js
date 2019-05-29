function rot13(str) { //LBH QVQ VG!

  return str;
}

//Change the inputs below to test
rot13("SERR PBQR PNZC");



//uppercase alphabet = CharCode 65 - 90
//CharCode Conversion:
//  65-77 (+13)
//  78-90 (-13)

///// STEPS?: /////
// convert to uppercase
// loop through the characters for the .length of the string
  // for each alphabetic character, grab the charcode
    // convert the charcode to the corresponding key charcode
    // conert the new charcode to character
    // add character to new string
  //  else return the original character

///// METHODS: /////
// .charCodeAt(index)
// .CharAt(index)
