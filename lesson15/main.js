// 1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// const isNumberInRange = (num) => {
//   return num > 0 && num < 10 ? true : false;
// };

// console.log(isNumberInRange(-10));

// 2. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// let arr = [-5, 1, 2, 4, 11, 55];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (isNumberInRange(arr[i])) {
//     newArr.push(arr[i]);
//   }
// }

// console.log(newArr);

// 3. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

// const getDigitsSum = (number) => {
//   let arrNumbers = String(number).split('');

//   return sumArr(arrNumbers);
// };

// const sumArr = (arr) => {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += +arr[i];
//   }

//   return sum;
// };

// console.log(getDigitsSum(112));

// 4. Найдите все года от 1 до 2021, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

// const getDigitsSum = (number) => {
//   let arrNumbers = String(number).split('');

//   return sumArr(arrNumbers);
// };

// const sumArr = (arr) => {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += +arr[i];
//   }

//   return sum;
// };

// const getAllYearsWithSum = (year) => {
//   let years = []
//   for (let i = 1; i <= year; i++) {
//     if (getDigitsSum(i) === 13) {
//       years.push(i);
//     }
//   }

//   return years;
// };

// console.log(getAllYearsWithSum(2021));

// 5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// const isEven = (number) => {
//   return number % 2 === 0 ? true : false;
// }

// console.log(isEven(11));

// 6. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (isEven(arr[i])) {
//     evenArr.push(arr[i])
//   }
// }

// console.log(evenArr);

// 7. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

const getDivisors = (num) => {
  let arr = [1];
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) arr.push(i)
  }

  return arr;
};

console.log(getDivisors(10));