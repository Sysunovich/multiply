module.exports = function multiply(first, second) {
var firstNumber = BigInt(first);
var secondNumber = BigInt(second);
let multiply = firstNumber * secondNumber;
return String(multiply);
}