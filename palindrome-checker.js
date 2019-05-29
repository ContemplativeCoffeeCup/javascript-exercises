function palindrome(str) {
  var symbols = /\W|_/g;
  str = str.replace(symbols, "").toLowerCase();
  var isPalindrome = str.replace(symbols, "").toLowerCase().split("").reverse("").join("");
  return Boolean(str === isPalindrome);
}



palindrome("eye");
