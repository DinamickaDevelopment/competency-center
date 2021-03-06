﻿
//шаблонная строка
console.log(`this is a template string`);

// Шаблонные строки (шаблоны) являются строковыми литералами, допускающими использование выражений.
// Шаблонные строки заключены в обратные кавычки (` `)  вместо двойных или одинарных. 
// Они могут содержать местозаполнители, которые обозначаются знаком доллара и фигурными скобками (${выражение}). 
// Выражения в местозаполнителях и текст между ними передаются в функцию. Стандартная функция просто объединяет все части в строку. 
// Если перед строкой присутствует выражение,  то шаблонная строка называется "тегированной шаблонной строкой".

//многострочная шаблонная строка
console.log(`this is a multiline template string
            string text line 1
            string text line 2`);

//интерполяция переменных 
let name = 'Bob', age = '25';
console.log(`Hello, my name is ${name} and I am ${age} years old!`);
//console.log("Hello, my name is" + (name + age) + "and I am ${age} years old!");

var a = 5, b = 10;
console.log(`The sum of a and b: ${a + b}`);

function Calc (a,b) { return a + b }
console.log(`The sum of a and b: ${Calc(1,2)}`);

//тегированная шаблонная строка 
function tags(strings, ...values) {
    console.log(strings[0]); // "Hello "
    console.log(strings[1]); // "world"
    console.log(strings[2]); // "again"
    console.log(values[0]);  // 15
    console.log(values[1]);  // 50
}

tags`Hello ${a +b} world ${a * b} again`;

//Специальное свойство raw, доступное для первого аргумента тегированного шаблона, 
//позволяет получить строку в том виде, как она была введена:
function tag1(strings, ...values) {
    alert(strings.raw[0]);
}

tag1`string text line 1 \n string text line 2`;
// "string text line 1 \n string text line 2"
