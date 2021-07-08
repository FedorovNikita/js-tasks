// 1. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

// function equal(firstNumber, secondNumber) {
//   return firstNumber === secondNumber;
// }

// console.log(equal(2, 3));
// console.log(equal(6, 6));

// 2. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.

// function compareNumber(firstNumber, secondNumber) {
//   return firstNumber + secondNumber > 10;
// }

// console.log(compareNumber(4, 4));
// console.log(compareNumber(6, 6));

// 3. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

function isNegativeNumber(number) {
  return number < 0;
}

console.log(isNegativeNumber(-1));
console.log(isNegativeNumber(6));

