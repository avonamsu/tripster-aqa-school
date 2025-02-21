//Тема: Продвинутая работа с функциями
//Раздел: Рекурсия и стек

//Task #1: Вычислить сумму чисел до данного
/*
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
С использованием формулы арифметической прогрессии.
*/

// С использованием цикла
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) 
    {
      sum += i;
    }
    return sum;
  }
  console.log(sumTo(100)); // 5050

  //Через рекурсию
  function sumTo(n) 
  {
    if (n === 1) return 1; 
    return n + sumTo(n - 1); //функция вызывает саму себя с меньшим значенеим, пока не дойдет до 1
  }
  console.log(sumTo(100)); // 5050

  //С использованием формулы арифметической прогрессии
  function sumTo(n) 
  {
    return (n * (n + 1)) / 2;
  }
  console.log(sumTo(100)); // 5050

//Task #2: Вычислить факториал
//Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.

  function factorial(n) 
  {
    if (n === 1) return 1; 
    return n * factorial(n - 1); //функция вызывает саму себя с меньшим значенеим, пока не дойдет до 1
  }
  console.log(factorial(5)); // 120

//Task #3: Числа Фибоначчи
//Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

  function fib(n) 
  {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  }
  
  console.log(fib(3)); // 2
  console.log(fib(7)); // 13
  console.log(fib(20)); // 6765

//Task #4: Вывод односвязного списка
/*Напишите функцию printList(list), которая выводит элементы списка по одному.
Сделайте два варианта решения: используя цикл и через рекурсию.*/

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

//цикл
function printList(list) 
{
    let current = list;
    while (current) 
    {
      console.log(current.value);
      current = current.next;
    }
  }
  printList(list);

  //рекурсия
  function printList(list) 
  {
    if (list) 
    {
      console.log(list.value);
      printList(list.next);
    }
  }
  printList(list);

//Task #5: Вывод односвязного списка в обратном порядке
/*
Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
Сделайте два решения: с использованием цикла и через рекурсию.
*/

  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  //цикл
  function printListReverse(list) 
  {
    let stack = [];
    let current = list;
    
    while (current) 
    {
      stack.push(current.value);
      current = current.next;
    }
  
    while (stack.length) 
    {
      console.log(stack.pop());
    }
  }
  printListReverse(list);

  //рекурсия
  function printListReverse(list) 
  {
    if (list) 
    {
      printListReverse(list.next);  
      console.log(list.value);       
    }
  }
  printListReverse(list);
  
  
//Раздел: Область видимости переменных, замыкание
//Task #1: Учитывает ли функция последние изменения?

let name = "John";

function sayHi() 
{
  console.log("Hi, " + name);
}

name = "Pete"; 

sayHi(); //переменной присваивается новое значение перед вызовом функции => "Pete"

//Task #2: Какие переменные доступны?
//Какое значение будет показано? «Pete» или «John»?

function makeWorker() 
{
    let name = "Pete";
  
    return function() 
    {
      console.log(name);
    };
}
  
  let name = "John";
  
  // создаём функцию
  let work = makeWorker();
  
  // вызываем её
  work(); // Pete

//Task #3: Независимы ли счётчики?
/*Здесь мы делаем два счётчика: counter и counter2, используя одну и ту же функцию makeCounter.
Они независимы? Что покажет второй счётчик? 0,1 или 2,3 или что-то ещё?*/
  
function makeCounter() 
{
    let count = 0;
  
    return function() 
    {
      return count++;
    };
}
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  //независимы, у каждого свой счетчик, т.к разные вызовы
  console.log( counter2() ); // 0
  console.log( counter2() ); // 1

//Task #4: Объект счётчика
/*
Здесь объект счётчика создан с помощью функции-конструктора.
Будет ли он работать? Что покажет?
*/

function Counter() 
{
    let count = 0;
  
    this.up = function() 
    {
      return ++count;
    };

    this.down = function() 
    {
      return --count;
    };
}
  
  let counter = new Counter(); //одна переменная = один и тот же счетчик
  
  console.log(counter.up()); // 1
  console.log(counter.up()); // 2
  console.log(counter.down()); // 1

//Task #5: Функция внутри if
/*
Посмотрите на код. Какой будет результат у вызова на последней строке?
Обратите внимание: результат зависит от режима выполнения кода. 
Здесь используется строгий режим "use strict".
*/

"use strict";

let phrase = "Hello";

if (true) 
{
  let user = "John";

  //объявлена внутри if
  function sayHi() 
  {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi(); // ReferenceError: user is not defined

//Task #6: Сумма с помощью замыканий
//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

function sum(a) 
{
    return function(b) 
    {
      console.log(a + b); //a берется из sum
    };
  }
  
  sum(1)(2);  // 3
  sum(5)(-1); // 4
  
//Task #7: Видна ли переменная?
//Что выведет данный код?

let x = 1;

function func() 
{
  console.log(x); // Cannot access 'x' before initialization

  let x = 2;
}

func(); 

//Task #8: Фильтрация с помощью функции
/*У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

Сделайте набор «готовых к употреблению» фильтров:

inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
Они должны использоваться таким образом:

arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива*/

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) 
{
    return function(x) 
    {
      return x >= a && x <= b;
    };
}
  
function inArray(arr) 
{
    return function(x) 
    {
      return arr.includes(x);
    };
}
  
console.log(arr.filter(inBetween(3, 6))); // 3, 4, 5, 6
console.log(arr.filter(inArray([1, 2, 10]))); // 1, 2
  
//Task #9: Сортировать по полю
//Напишите функцию byField, которая может быть использована для сортировки коротким способом.

function byField(fieldName) 
{
    return function(a, b) 
    {
        return (a[fieldName] > b[fieldName]) ? 1 :
        (a[fieldName] < b[fieldName]) ? -1 : 
        0;
    };
  }
  
  let users = [
    { name: "Иван", age: 20, surname: "Иванов" },
    { name: "Пётр", age: 18, surname: "Петров" },
    { name: "Анна", age: 19, surname: "Каренина" }
  ];
  
  users.sort(byField('name'));
  console.log(users);
  
  users.sort(byField('age'));
  console.log(users);

//Task #10: Армия функций
/*Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…
Почините код, чтобы он работал как задумано.*/

function makeArmy() 
{
    let shooters = [];
  
    let i = 0;
    while (i < 10) 
    {
      let shooter = (function(i) 
      { 
        return function() 
        { 
          console.log(i); 
        };
      })(i); 
      shooters.push(shooter); 
      i++;
    }
    return shooters;
}
let army = makeArmy();
  
army[0](); // 0
army[1](); // 1
army[2](); // 2