// 1. Выведите столбец чисел от 1 до 100.

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// 2. Выведите столбец чисел от 11 до 33.

// for (let i = 11; i <= 33; i++) {
//   console.log(i);
// }

// 3. Выведите столбец четных чисел в промежутке от 0 до 100.

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// 4. С помощью цикла найдите сумму чисел от 1 до 100.

// let result = 0;

// for (let i = 1; i <= 100; i++) {
//   result += i;
// }

// console.log(result);

// 5. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 6. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

// let arr = [1, 2, 3, 4, 5];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//   result += arr[i];
// }

// console.log(result);

// 7. Дан объект obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.

// let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};

// for (key in obj) {
//   console.log(key, obj[key]);
// }

// 8. Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

// let obj = {
//   'Коля': '200',
//   'Вася': '300',
//   'Петя ': '400'
// };

// for (key in obj) {
//   console.log(`${key} - зарплата ${obj[key]} долларов`);
// }

// 9. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// let arr = [2, 5, 9, 15, 0, 4];

// for (let i = 0; i < arr.length; i++) {
//   if (i > 3 && i < 10) {
//     console.log(i);
//   }
// }

// 10. Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива

// let arr = [-5, -23, 2, 5, -12, 8, 6];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     result += arr[i];
//   }
// }

// console.log(result);

// 11. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// let arr = [1, 2, 5, 9, 4, 13, 4, 10];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     console.log(arr[i]);
//     break;
//   }
// }

// 12. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// let arr = [10, 20, 30, 50, 235, 3000];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].toString()[0] == 1 || arr[i].toString()[0] == 2 || arr[i].toString()[0] == 5) {
//     console.log(arr[i], typeof arr[i]);
//   }
// }

// 13. Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = '-';

// for (let i = 0; i < arr.length; i++) {
//   result += arr[i] + '-'
// }

// console.log(result);

// 14. Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

// let daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

// for (let i = 0; i < daysOfWeek.length; i++) {
//   if (daysOfWeek[i] === 'сб' || daysOfWeek[i] === 'вс') {
//     console.log(daysOfWeek[i].bold());
//   } else {
//     console.log(daysOfWeek[i]);
//   }
// }

// 15.  Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.

// let daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let day = 'вт';

// for (let i = 0; i < daysOfWeek.length; i++) {
//   if (daysOfWeek[i] === day) {
//     console.log(daysOfWeek[i].italics());
//   } else {
//     console.log(daysOfWeek[i]);
//   }
// }

// 16. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

let result = 0;
let n = 1000;

while (n > 50) {
  n /= 2;
  result++;
}

n = result;
console.log(n);


