//============================================

//ДОМАШКА
/*
1. Изучить теорию
2. Какой или какие из вариантов не верны:
*/

//Вариант №1
let userAge = 36;
let userInfo = "Фрилансер ${userAge}";

//Вариант №2
let userHeight = 145 / 0;
//Вернется значение NaN
console.log(userHeight);

//Вариант №3
let userName;
//Вернется тип данных Null
console.log(typeof userName); 

//Вариант №4
let userSize = "45" / "8";
//Вернется тип данных Number
console.log(typeof userSize);

//typeof показывает в консоле тип данных пересенной, например строка, номер и т.д.


//console.log(userName); (имя переменной)
//используется для получения значения переменной в консоле

//1. Undefined – неопределенный тип

//2. null – ничего, но это определенный тип. просто пустота к которой нельзя ничего присвоить
//   если null вывести через typeof он выдаст тип данных object это ошибка ЯП оставленная для совместимости

//3. Boolean - оператор сравнения.

//4. Number - возвращает целые и числа с плавоющей запятой
//   Infinity - бесконечность (например при делении на ноль)
//   -Infinity - минус бесконечность
//   Nan - вычислительная ошибка
/*
В JavaScript тип данных «number» не может
содержать числа больше, чем 9007199254740991,
или меньше, чем -9007199254740991.
*/


//5. bigint - тип данных, очень большое число (к нему в конце нужно добавлять букву n)
//const bigInteger = 12345678901234567890123456789n;
//console.log(typeof bigInteger);


//6. String - строка
//   Ковычки бывают 3 типов "", '' и ``
//   `` позваляют встраивать внутарь себя выражения напимер ${userAge}
/*
let userName = "Фрилансер по жизни";
console.log(typeof userName);

let userNameV2 = 'Фрилансер по жизни';
console.log(typeof userNameV2);
let userNameV3 = `Фрилансер по жизни`;
console.log(typeof userNameV3);


let userAge = 36;
let userAgeInfo = `Возраст: ${userAge}`;
console.log(userAgeInfo);
*/

//7. Object - содержет в себе более сложную структуру данных
//   объект содержет в себе свойства
//   свойства это пара ключ и значение, которые разделены двоиточием (name: "фрилансер")
//   свойства между собой разделенны запятыми
/*
//Object

let userInfo = {
	name: "Фрилансер по жизни",
	age: 36
}
console.log(userInfo);
console.log(typeof userInfo);
*/

//8. Symbol - символ это уникальный индификотор объекта (id объекта)
/*
//Symbol
let id = Symbol("id");
console.log(typeof id);
*/

//9. function - тот же обджект, только более простой для функций
/*
//Function

let funcVariable = function name(params) {
	// код функции
}
console.log(typeof funcVariable);
*/


// Преобразование
// Существует автоматическое преобразование
// например вот из строк в число 
/*
let userAge = "72" / "2";
console.log(userAge);
console.log(typeof userAge);
*/

// остальные преобразования смотри ниже



























//============================================
//============================================


// Динамическая типизация
/*
JavaScript является динамически типизированным.
То есть тип данных переменной меняется динамически
в момент присвоения либо смены её значения.
 А не в момент объявления.
*/
/*
let userName; // Объявляем переменную

console.log(typeof userName);

userName = "Фрилансер по жизни"; //Строка (String)

console.log(typeof userName);

userName = 58; // Число (Number)

console.log(typeof userName);
*/

//============================================


// Undefined – неопределенный тип */
// undefined - вернется в случае если переменная объявленна, но ей не было присвоенно значение
/*
let userName; //Объявляем переменную
// Получаем тип данных
console.log(typeof userName);
// Получаем значение переменной
console.log(userName);

// Примеры использования
// Проверяем определена ли переменная

if (userName === undefined) {
	console.log('Переменная НЕ определена');
} else {
	console.log('Переменная определена');
}
// либо с помощью оператора typeof

if (typeof userName === 'undefined') {
	console.log('Переменная НЕ определена');
} else {
	console.log('Переменная определена');
}
*/
//============================================

// Null
/*
Null, также как и Undefined,
содержит только одно значение null
*/
/*
// Пример
let userName = null;
console.log(userName);
*/
/*
// Пример
// Попытка обратиться в объекту которого нет
let block = document.querySelector('.block');

// Получаем null
console.log(block);

// Вернет тип object
console.log(typeof block);
*/
//============================================

// Boolean
/*
Boolean – это Булевый или логический тип.
Может принимать только два значения:
true (истина) и false (ложь).
*/
/*
// Пример
let willYouMarryMe = false;
if (willYouMarryMe) {
	console.log(':)');
} else {
	console.log(':(');
}
*/
/*
//Так же можно использовать
//с операторами сравнения
let trueOrFalse = 58 > 18;
console.log(trueOrFalse);
*/
//============================================


//Number(Число)
/*
Числовой тип данных представляет значения
как в виде целых чисел,
так и в виде чисел с плавающей точкой.
*/
/*
let userAge = 20;
let userHeight = 1.83;
console.log(userAge);
console.log(typeof userAge);
console.log(userHeight);
console.log(typeof userHeight);
*/


// Infinity 
/*
let getInfinity = 58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);
*/
/*
// -Infinity
let getInfinity = -58 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);
*/
/*
// NaN
let getNan = 'Фрилансер' / 10;
console.log(getNan);
console.log(typeof getNan);

Если где - то в математическом выражении
есть NaN, то результатом вычислений
с его участием будет NaN.
*/

//============================================

//BigInt

/*
В JavaScript тип данных «number» не может
содержать числа больше, чем 9007199254740991,
или меньше, чем -9007199254740991.
*/

/*
//BigInt
const bigInteger = 12345678901234567890123456789n;
console.log(typeof bigInteger);
*/

//============================================

//String 
/*
let userName = "Фрилансер по жизни";
console.log(typeof userName);

let userNameV2 = 'Фрилансер по жизни';
console.log(typeof userNameV2);
let userNameV3 = `Фрилансер по жизни`;
console.log(typeof userNameV3);


let userAge = 36;
let userAgeInfo = `Возраст: ${userAge}`;
console.log(userAgeInfo);
*/

//============================================

/*
//Object

let userInfo = {
	name: "Фрилансер по жизни",
	age: 36
}
console.log(userInfo);
console.log(typeof userInfo);
*/
//============================================


/*
//Symbol
let id = Symbol("id");
console.log(typeof id);
*/

//============================================
/*

//Function

let funcVariable = function name(params) {
	// код функции
}
console.log(typeof funcVariable);

*/
//============================================
//Преобразование типов

//Строковое преобразование
/*
let userAge = 58;
console.log(userAge);
console.log(typeof userAge);

userAge = String(userAge);

console.log(userAge);
console.log(typeof userAge);
*/
/*
let userTrue = true;
console.log(userTrue);
console.log(typeof userTrue);

userTrue = String(userTrue);

console.log(userTrue);
console.log(typeof userTrue);
*/


//Численное преобразование
/*
let userAge = "58";
console.log(userAge);
console.log(typeof userAge);

userAge = Number(userAge);

console.log(userAge);
console.log(typeof userAge);
*/
/*
let userAge = "Фрилансер";

userAge = Number(userAge);

console.log(userAge);
console.log(typeof userAge);
*/
/*
let userAge = "72" / "2";
console.log(userAge);
console.log(typeof userAge);
*/

/*
//Логическое преобразование
let userAge = "";
console.log(userAge);
console.log(typeof userAge);

userAge = Boolean(userAge);

console.log(userAge);
console.log(typeof userAge);
*/