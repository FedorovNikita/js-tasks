// 1. С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

// let str = '';

// for (let i = 1; i < 10; i++) {
//   str += i;
// }

// console.log(str);

// 2. С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str

// let str = '';

// for (let i = 9; i > 0; i--) {
//   str += i;
// }

// console.log(str);

// 3. С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.

// let str = '-';

// for (let i = 1; i < 10; i++) {
//   str += i + '-';
// }

// console.log(str);

// 4. Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

// let str = '';

// for (let i = 0; i < 20; i++) {
//   str += 'X';
//   console.log(str);
// }

// 5. С помощью двух вложенных циклов нарисуйте следующую пирамидку:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// for (let i = 1; i < 10; i++) {
//   let str = '';
//   for (let j = 1; j <= i; j++) {
//     str += i;
//   }
//   console.log(str);
// }


// 6. Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:
// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx

for (let i = 2; i <= 10; i += 2) {
  let str = '';
  for (let j = 1; j <= i; j++) {
    str += 'X';
  }
  console.log(str);
}
