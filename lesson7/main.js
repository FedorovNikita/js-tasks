// 1. Дана строка 'js'. Сделайте из нее строку 'JS'. 

// let str = 'js';
// console.log(str.toUpperCase());

// 2. Дана строка 'JS'. Сделайте из нее строку 'js'. 

// let str = 'JS';
// console.log(str.toLowerCase());

// 3. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке. 

// let str = 'я учу javascript!';
// console.log(str.length);

// 4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice). 

// let str = 'я учу javascript!';

// console.log(str.substr(6, 10));
// console.log(str.substring(6, str.length - 1));
// console.log(str.slice(6, str.length - 1));

// 5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'. 

// let str = 'я учу javascript!';
// console.log(str.indexOf('учу'));

// 6. Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str. 

// let str = 'я учу javascript!';
// let n = 5;
// result = '';

// if (str.length > 5) {
//     result = str.slice(0, 5) + '...'
// } else {
//     result = str;
// }

// console.log(result);

// 7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.

// let str = 'Я-учу-javascript!';
// console.log(str.replace(/-/g, '!'));

// 8. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива. 

// let str = 'я учу javascript!';
// console.log(str.split(' '));

// 9. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'. 

// let date = '2025-12-31';
// let arrDate = date.split('-');
// console.log(`${arrDate[2]}.${arrDate[1]}.${arrDate[0]}`);
// console.log(date.split('-').reverse().join('.'));

// 10. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'. 

// let arr = ['я', 'учу', 'javascript', '!'];
// console.log(arr.join('+'));

// 11. Преобразуйте первую букву строки в верхний регистр. 

// let str = 'я учу javascript!';
// console.log(str[0].toUpperCase() + str.slice(1));

// 12. Преобразуйте первую букву каждого слова строки в верхний регистр.

// let str = 'я учу javascript!';
// console.log(str.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' '));

// 13. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками. 

let str = 'var_test_text';
console.log(str[0] + str.split('_').map(el => el[0].toUpperCase() + el.slice(1)).join('').slice(1));







