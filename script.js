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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. 
// Метод должен понимать плюс + и минус -.


// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. 
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:


// function Calculator() {
// 	this.methods = {
// 		"-": (a, b) => a - b,
// 		"+": (a, b) => a + b
// 	};
// 	this.calculate = function (str) {
// 		let split = str.split(" "),
// 			a = +split[0],
// 			op = split[1],
// 			b = +split[2]

// 		if (!this.methods[op] || isNaN(a) || isNaN(b)) {
// 			return NaN;
// 		} else {
// 			return this.methods[op](a, b);
// 		}
// 	}
// 	this.addMethod = function (name, func) {
// 		this.methods[name] = func;
// 	}
// }


// let powerCalc = new Calculator;
// powerCalc.addMethod('*', (a, b) => a * b);
// powerCalc.addMethod('/', (a, b) => a / b);
// powerCalc.addMethod('**', (a, b) => a ** b);

// let result = powerCalc.calculate('2 ** 3');
// alert(result);

// let calc = new Calculator;

// alert(calc.calculator('3 ** 7'));

//////////////////////////////////////////////////////////////////////////////////////////////////////

// У вас есть массив объектов user, и в каждом из них есть user.name.
// Напишите код, который преобразует их в массив имён.

// let vasya = { name: 'Вася', age: 25};
// let petya = { name: 'Петя', age: 30};
// let masha = { name: 'Маша', age: 28};

// let users = [vasya, petya, masha];
// let names = users.map(a => a.name);

// alert(names);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// let vasya = { name: 'Вася', surname: 'Пупкин', id:1};
// let petya = { name: 'Петя', surname: 'Иванов', id:2};
// let masha = { name: 'Маша', surname: 'Петрова', id:3};

// let users = [vasya, petya, masha];

// let usersMapped = users.map (user => ({
// 	fullName: `${user.name} ${user.surname}`,
// 	id:  user.id
// }));

// alert (usersMapped[0].id);
// alert (usersMapped[0].fullName);

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Напишите функцию sortByAge(users),
// которая принимает массив объектов со свойством age и сортирует их по нему.


// let vasya = { name: 'Вася', age: 25};
// let petya = { name: 'Петя', age: 30};
// let masha = { name: 'Маша', age: 28};

// let arr = [ vasya, petya, masha];

// function sortByAge (arr) {
// 	let result = arr.sort()
// }

// alert (arr[0].name);
// alert (arr[1].name);
// alert (arr[2].name);