function rot13(str) { // LBH QVQ VG!
  var CharArray = [];
  var regEx = /[A-Z]/ ;
  str = str.split("");
  for (var x in str) {
   if (regEx.test(str[x])) {
     CharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
   } else {
     CharArray.push(str[x].charCodeAt());
   }
  }
  str = String.fromCharCode.apply(String, CharArray);
  return str;
}

   // Change the inputs below to test
rot13("SERR PBIR PNZC");
