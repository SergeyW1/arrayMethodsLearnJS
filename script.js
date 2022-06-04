// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.


// function camelize(str) {
// 	const result = str.split('-').map((item ,index) => {
// 		if (index > 0) {
// 			return item[0].toUpperCase() + item.slice(1);
// 		} else {
// 			return item;
// 		};
// 	}).join('');
// 	return result;
// }


// alert (camelize("background-color"));
// alert (camelize("list-style-image"));
// alert (camelize("-webkit-transition"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

// let arr = [5, 3, 8, 1];

// function filterRange (arr, a, b) {
// 	let result = arr.filter (num => num >= a && num < b);
// 	return result;
// }

// alert (filterRange(arr, 1,4));
// alert (arr);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.


// function filterRangeInPlace(arr,a,b) {
// 	for (let i = 0; i < arr.length; i++) {
// 		let num = arr[i];
// 		if (num < a || num > b) {
// 			arr.splice(i, 1);
// 		} 
// 	}

// }
// arr = [5,3,8,1];
// filterRageInPlace(arr, 1, 4);
// alert(arr);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Сортировать в порядке по убыванию

// let arr = [5,2,1,-10,8];
// arr.sort ((a,b) => b-a);
// alert(arr);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

// let arr = ['HTML', 'JavaScript', 'CSS'];

// function copySorted (arr) {
// 	return arr = [...arr].sort();
// }

// let sorted = copySorted(arr);

// console.log (sorted);
// console.log (arr);
