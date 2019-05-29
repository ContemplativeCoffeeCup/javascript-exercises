function rot13(str) { //LBH QVQ VG!
  // convert to uppercase
  str = str.toUpperCase();
  // split the string into an array
  return str.split('')
  // loop through the characters for the .length of the string
for (var i = 0; i < str.length; i++) {

}
    // for each alphabetic character, grab the charcode

// expected output: Array [2, 8, 18, 32]
      // convert the charcode to the corresponding key charcode

      // conert the new charcode to character

      // add character to new string

    //  else return the original character
    }

  return str;
}

//Change the inputs below to test
rot13("SERR PBIR PNZC");


//uppercase alphabet = CharCode 65 - 90
//CharCode Conversion:
//  65-77 (+13)
//  78-90 (-13)


    // Change the inputs below to test
    rot13("LBH QVQ VG!");
