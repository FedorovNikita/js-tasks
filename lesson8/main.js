// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let firstArr = [1, 2, 3];
// let secondArr = [4, 5, 6];

// console.log(firstArr.concat(secondArr));

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. 

// let arr = [1, 2, 3];
// console.log(arr.reverse());

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6. 

// let arr = [1, 2, 3];
// arr.push(4, 5, 6)
// console.log(arr);

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6. 

// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6)
// console.log(arr);

// 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент. 

// let arr = ['js', 'css', 'jq'];
// console.log(arr[0], arr.shift());

// 6.  Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент. 

// let arr = ['js', 'css', 'jq'];
// console.log(arr[arr.length - 1], arr.pop());

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]. 

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(0, 3);
// console.log(newArr);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]. 

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(-2);
// console.log(newArr);

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]
 
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2)
// console.log(arr);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]. 

// let arr = [1, 2, 3, 4, 5];
// let res = arr.splice(1, 3);
// console.log(res);

// 11. 	Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]. 

// let arr = [1, 2, 3, 4, 5];

// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. 

// let arr = [1, 2, 3, 4, 5];

// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');

// console.log(arr);

// 13.  Дан массив [3, 4, 1, 2, 7]. Отсортируйте его. 

// let arr = [3, 4, 1, 2, 7];

// console.log(arr.sort());

// 14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

let obj = {
    js:'test', 
    jq: 'hello', 
    css: 'world'
};

console.log(Object.keys(obj));
