function reverseString(str) {
  if (str === "") {
    return "";
  }

  return reverseString(str.substr(1)) + str.charAt(0);
}

function reverseStringTernary(str) {
  return str === "" ? "" : reverseStringTernary(str.substr(1)) + str.charAt(0);
}

console.log(reverseString('Helder')); // => redleH
console.log(reverseStringTernary('Hello')); // => olleH
