// 1. Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.

// let a = 10;
// let b = 3;

// console.log(a % b);

// 2. Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.

// let a = 10;
// let b = 3;

// if (a % b === 0) {
//     console.log('Делится', a / b);
// } else {
//     console.log('Делитя с остатком', a % b);
// }

// 3. Возведите 2 в 10 степень. Результат запишите в переменную st. 

// let st = 2 ** 10;
// let st = Math.pow(2, 10);
// console.log(st);

// 4. Найдите квадратный корень из 245. 

// let sqrt = Math.sqrt(245);
// console.log(sqrt);

// 5. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for. 

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//     result += arr[i] * 2;
// };

// result = Math.sqrt(result);
// console.log(result);

// 6. Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. 

// let num = 379;
// console.log(Math.sqrt(378).toFixed());
// console.log(Math.sqrt(378).toFixed(1));
// console.log(Math.sqrt(378).toFixed(2));

// 7. Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'. 

// let num = 587;

// let result = {
//     ceil: Math.ceil(Math.sqrt(num)),
//     floor: Math.floor(Math.sqrt(num))
// }

// console.log(result);

// 8. Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// let arr = [4, -2, 5, 19, -130, 0, 10];
// console.log('Min', Math.min.apply(null, arr));
// console.log('Max', Math.max.apply(null, arr));

// 9. Выведите на экран случайное целое число от 1 до 100. 

// console.log(Math.ceil(Math.random() * 100));

// 10. Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while). 

// let newArr = [];

// for (let i = 0; i < 10; i++) {
//     newArr.push(Math.ceil(Math.random() * 10));
// }

// console.log(newArr);

// 11. Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b. 

// let a = 3;
// let b = 10;

// console.log(Math.abs(a - b));

// 12. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1. 

// let a = 6;
// let b = 1;
// let c = Math.abs(a - b);
// console.log(c);

// 13. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79. 

// let arr = [12, 15, 20, 25, 59, 79];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
// }

// console.log(result / arr.length);

// 14.  Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4. 

let value = 10;
let result = 1;

for (let i = value; i > 0; i--) {
    result *= i;
}

console.log(result);


