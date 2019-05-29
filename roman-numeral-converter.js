function convertToRoman(num) {
  // an array that contains basic roman numeral compositions
  var numerals = [ "M", "CM", "DCCC", "DCC", "DC", "D", "CD", "CCC", "CC", "C", "XC", "LXXX", "LXX", "LX", "L", "XL", "XXX", "XX", "X", "IX", "VIII", "VII", "VI", "V", "IV", "III", "II", "I"]
  // a second array containing the arabic numeral equivalent
  var numbers = [ 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
  // create a variable to contain the roman numeral conversion
  var roman = '';
  // loop through the numbers array
  for (var index = 0; index < numbers.length; index++) {
    // looping as long as the value at the current index is less than num
    while (numbers[index] <= num) {
      // add the Roman numeral and decrease num by the corresponding number
      roman += numerals[index];
      num -= numbers[index];
    }
  }
  return roman;
}

convertToRoman(36);
