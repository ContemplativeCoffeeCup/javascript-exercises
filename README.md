# JavaScript Exercises

## FreeCodeCamp JavaScript Algorithms and Data Structures Projects
The following exercises were required for FreeCodeCamp's Javascript Algorithms And Data Structures Certification. Below the given objective for the projects are the tests passed.

### Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

> A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

**Testing:**
* palindrome("eye") should return a boolean.
* palindrome("eye") should return true.
* palindrome("_eye") should return true.
* palindrome("race car") should return true.
* palindrome("not a palindrome") should return false.
* palindrome("A man, a plan, a canal. Panama") should return true.
* palindrome("never odd or even") should return true.
* palindrome("nope") should return false.
* palindrome("almostomla") should return false.
* palindrome("My age is 0, 0 si ega ym.") should return true.
* palindrome("1 eye for of 1 eye.") should return false.
* palindrome("0_0 (: /-\ :) 0-0") should return true.
* palindrome("five|\_/|four") should return false.

---

### Roman Numeral Converter
Convert the given number consisting of Arabic numerals into Roman numerals.

**Testing:**
* convertToRoman(2) should return "II"
* convertToRoman(3) should return "III"
* convertToRoman(4) should return "IV"
* convertToRoman(5) should return "V"
* convertToRoman(9) should return "IX"
* convertToRoman(12) should return "XII"
* convertToRoman(16) should return "XVI"
* convertToRoman(29) should return "XXIX"
* convertToRoman(44) should return "XLIV"
* convertToRoman(45) should return "XLV"
* convertToRoman(68) should return "LXVIII"
* convertToRoman(83) should return "LXXXIII"
* convertToRoman(97) should return "XCVII"
* convertToRoman(99) should return "XCIX"
* convertToRoman(400) should return "CD"
* convertToRoman(500) should return "D"
* convertToRoman(501) should return "DI"
* convertToRoman(649) should return "DCXLIX"
* convertToRoman(798) should return "DCCXCVIII"
* convertToRoman(891) should return "DCCCXCI"
* convertToRoman(1000) should return "M"
* convertToRoman(1004) should return "MIV"
* convertToRoman(1006) should return "MVI"
* convertToRoman(1023) should return "MXXIII"
* convertToRoman(2014) should return "MMXIV"
* convertToRoman(3999) should return "MMMCMXCIX"

---

### Caesar's Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

My task was to write a function which takes a ROT13 encoded string as input and returns a decoded string.

**Testing**
* rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP
* rot13("SERR CVMMN!") should decode to FREE PIZZA!
* rot13("SERR YBIR?") should decode to FREE LOVE?
* rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

---

### Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

Validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, I must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

##Testing##

* telephoneCheck("555-555-5555") should return a boolean.
* telephoneCheck("1 555-555-5555") should return true.
* telephoneCheck("1 (555) 555-5555") should return true.
* telephoneCheck("5555555555") should return true.
* telephoneCheck("555-555-5555") should return true.
* telephoneCheck("(555)555-5555") should return true.
* telephoneCheck("1(555)555-5555") should return true.
* telephoneCheck("555-5555") should return false.
* telephoneCheck("5555555") should return false.
* telephoneCheck("1 555)555-5555") should return false.
* telephoneCheck("1 555 555 5555") should return true.
* telephoneCheck("1 456 789 4444") should return true.
* telephoneCheck("123**&!!asdf#") should return false.
* telephoneCheck("55555555") should return false.
* telephoneCheck("(6054756961)") should return false
* telephoneCheck("2 (757) 622-7382") should return false.
* telephoneCheck("0 (757) 622-7382") should return false.
* telephoneCheck("-1 (757) 622-7382") should return false
* telephoneCheck("2 757 622-7382") should return false.
* telephoneCheck("10 (757) 622-7382") should return false.
* telephoneCheck("27576227382") should return false.
* telephoneCheck("(275)76227382") should return false.
* telephoneCheck("2(757)6227382") should return false.
* telephoneCheck("2(757)622-7382") should return false.
* telephoneCheck("555)-555-5555") should return false.
* telephoneCheck("(555-555-5555") should return false.
* telephoneCheck("(555)5(55?)-5555") should return false.
