module.exports = function reverse (n) {
  
  let number = Math.abs(n).toString();
  let inversedNumber = '';

  for (let i = number.length - 1; i >= 0; i--) {
    inversedNumber += number[i];
  }

  return +inversedNumber;

}