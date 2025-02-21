//Тема: Типы данных
//Раздел: Методы примитивов

const { resolve } = require('path');

//Task #1: Можно ли добавить свойство строке?

let str = "Привет";
str.test = 5;
console.log(str.test); //undefined

//Раздел: Числа
//Task #1: Сумма пользовательских чисел
//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });

    readline.question('Введите два числа через пробел: ', number => {
    const [num1, num2] = number.split(" ");
    console.log(Number(num1) + Number(num2));
    readline.close();
    });


//Task #2: Почему 6.35.toFixed(1) == 6.3?
//Методы Math.round и toFixed, согласно документации, 
// округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, 
// тогда как 5..9 в большую сторону. Как правильно округлить 6.35?

let num = 6.35;
let round = (6.35 * 10).toFixed(0) / 10; //63.5 => 64 => 6.4
console.log(round); //6.4

//Task #3: Ввод числового значения
/* Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
Функция должна возвращать числовое значение.
Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function readNumber()
{
    return new Promise((resolve) =>
    {
        readline.question("Введите число: ", (num) =>
        {
            if (num === '' || num === null)
            {
                resolve(null);
            }
            else if (isFinite(num))
            {
                resolve(+num);
            }
            else
            {
                readNumber().then(resolve); //снова вызывается readNumber()
            }
        });
    });
}

readNumber().then(result => {
    console.log("Вы ввели: " + result);
    readline.close();
});

//Task #4: Бесконечный цикл по ошибке
//Этот цикл – бесконечный. Он никогда не завершится, почему?

let i = 0;
while (i != 10) {
  i += 0.2; // i никогда не будет равен 10 из-за не точности
}

//Task #5: Случайное число от min до max
/* Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).*/

let random = (min, max) => 
{
    return min + Math.random() * (max - min);
}

console.log(random(1, 5)); 
console.log(random(1, 5)); 
console.log(random(1, 5)); 

//Task #6: Случайное целое число от min до max
/* Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
Любое число из интервала min..max должно появляться с одинаковой вероятностью.*/

let randomInteger = (min, max) => 
{
    return Math.floor(min + Math.random() * (max - min + 1));
}

console.log(randomInteger(1, 5)); 
console.log(randomInteger(1, 5)); 
console.log(randomInteger(1, 5)); 

//Раздел: Строки
//Task #1: Сделать первый символ заглавным
//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

let str = "test";

let ucFirst = str =>
{
    str = str[0].toUpperCase() + str.slice(1);
    return str;
}

console.log(ucFirst(str));

//Task #2: Проверка на спам
/* Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
Функция должна быть нечувствительна к регистру:*/

let checkSpam = str =>
{
    let reg = str.toLowerCase();
    return reg.includes('viagra') || reg.includes('xxx');
}

console.log( checkSpam('test ViaGra xxx'));
console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );

//Task #3: Усечение строки
/* Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.*/

let str = "Тестовый тест";
let maxlength = 6;

let truncate = (str, maxlength) =>
{
    if (str.length > maxlength) 
    {
        return str.slice(0, maxlength - 1) + "...";
    } 
    else return str;
}

let result = truncate(str, maxlength);
console.log(result);

//Task #4: Выделить число
/* Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое 
значение и возвращать его.*/

let num = "$120";

let extractCurrencyValue = str => 
{
    return +str.slice(1); 
}

console.log(extractCurrencyValue(num));

//Раздел: Массивы
//Task #1: Скопирован ли массив?
//Что выведет следующий код?

let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
console.log( fruits.length ); // 4, т.к. копия = ссылка на массив

//Task #2: Операции с массивами
/* Давайте произведём 5 операций с массивом.

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте Рэп и Регги в начало массива.
Массив по ходу выполнения операций:
Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл*/

let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

let middleIndex = Math.floor((styles.length -1) / 2);

styles.splice(middleIndex, 0, "Классика");

console.log(styles.shift());

styles.unshift("Рэп", "Регги");

//Task #3: Вызов в контексте массива
//Каков результат? Почему?

let arr = ["a", "b"];

arr.push(function() //добавляем в конец массива функцию 
{
  console.log(this);
});

arr[2](); // [ 'a', 'b', [Function (anonymous)] ]

//Task #4: Сумма введённых чисел
/* Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».*/

let sumInput = () =>
{
    let numbers = [5, 10, 15, "abc", 20, 0, null]; 
    let validNumbers = [];

    for (let value of numbers) 
    {
        if (typeof value === "number" && !isNaN(value)) 
        {
            validNumbers.push(value);
        }
    }

    let sum = 0;
    for (let i = 0; i < validNumbers.length; i++)
    {
        sum += validNumbers[i]; // добавляем текущее число к общей сумме
    }

    console.log("Сумма чисел:", sum);
}

sumInput();

//Task #5: Подмассив наибольшей суммы
/*На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.*/

let getMaxSubSum = arr => 
{
    let maxSum = 0; 
    let currentSum = 0; 

    for (let num of arr) 
    {
        currentSum += num; 
        if (currentSum < 0) currentSum = 0; //очищаем подмассив, если он стал меньше нуля
        maxSum = Math.max(maxSum, currentSum); //задаем максимальное число 
    }

    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); 
console.log(getMaxSubSum([2, -1, 2, 3, -9])); 
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); 
console.log(getMaxSubSum([-2, -1, 1, 2])); 
console.log(getMaxSubSum([100, -9, 2, -3, 5])); 
console.log(getMaxSubSum([1, 2, 3])); 
console.log(getMaxSubSum([-1, -2, -3])); 

//Раздел: Методы массивов
//Task #1: Переведите текст вида border-left-width в borderLeftWidth
/*Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.*/

let camelize = str =>
{
    let array = str.split("-"); //разделяем по - и помещаем в массив
    let string = array.join(""); //разделяем каждую букву и помещаем в строку
    return string;
}

console.log(camelize("background-color")); 
console.log(camelize("list-style-image")); 
console.log(camelize("-webkit-transition")); 

//Task #2: Фильтрация по диапазону
/*Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
Функция должна возвращать новый массив и не изменять исходный.*/

let arr = [5, 3, 8, 1];

let filterRange = (arr, a, b) =>
{
    return arr.filter(
        function(item)
    { 
        return item >= a && item <= b
    });
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered); 
console.log(arr); 

//Task #3: Фильтрация по диапазону "на месте"
/*Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.*/

let arr = [5, 3, 8, 1];

let filterRangeInPlace = (arr, a, b) =>
{
    for (let i = arr.length - 1; i >= 0; i--) 
    {
        if (arr[i] < a || arr[i] > b) 
        {
            arr.splice(i, 1); //удаляем один элемент
        }
    }
}

filterRangeInPlace(arr, 1, 4);
console.log(arr);

//Task #4: Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a); 

console.log( arr ); // 8, 5, 2, 1, -10

//Task #5: Скопировать и отсортировать массив
/* У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)*/

let arr = ["HTML", "JavaScript", "CSS"];

let copySorted = arr =>
{
    return arr.slice().sort();
}
  console.log(copySorted(arr));
  console.log( arr );

  //Task #6: Создать расширяемый калькулятор

function Calculator()
{
    this.methods = {}; //объект для хранения операций

    //метод выполнения расчетов    
    this.calculate = function(str)
    {
        let [a, oper, b] = str.split(" ");
        a = Number(a);
        b = Number(b);

        //проверяем корректность чисел
        if (isNaN(a) || isNaN(b)) return NaN;
        
        //проверяем существование операции
        if (this.methods[oper])
        {
            return this.methods[oper](a, b);
        }
        else return "Неверный оператор";
    }    

    //метод добавления новых операций
    this.addMethod = function(name, func)
    {
        this.methods[name] = func;
    };
}

let calc = new Calculator();

calc.addMethod("+", (a, b) => a + b);
calc.addMethod("-", (a, b) => a - b);

// Стандартные операции (сложение и вычитание)
console.log(calc.calculate("3 + 7")); // 10
console.log(calc.calculate("10 & 4")); // 6

// Добавляем новые операции
calc.addMethod("*", (a, b) => a * b); // Умножение
calc.addMethod("/", (a, b) => a / b); // Деление
calc.addMethod("**", (a, b) => a ** b); // Степень

// Использование новых операций
console.log(calc.calculate("5 * 3")); // 15
console.log(calc.calculate("10 / 2")); // 5
console.log(calc.calculate("2 ** 3")); // 8

//Task #7: Трансформировать в массив имён
/*У вас есть массив объектов user, и в каждом из них есть user.name. 
Напишите код, который преобразует их в массив имён.*/

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name)

console.log(names); // Вася, Петя, Маша

//Task #8: Трансформировать в объекты
/*У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, 
где fullName – состоит из name и surname.*/

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => 
({
  fullName: user.name + ' ' + user.surname,
  id: user.id
}));

console.log( usersMapped[0].id ); // 1
console.log( usersMapped[0].fullName ); // Вася Пупкин

//Task #9: Отсортировать пользователей по возрасту
/*Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.*/

let sortByAge = arr => 
{
    arr.sort((a, b) => a.age - b.age);
}
  
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 28 };
  
  let arr = [ vasya, petya, masha ];
  
  sortByAge(arr);
  
  console.log(arr[0].name); // Вася
  console.log(arr[1].name); // Маша
  console.log(arr[2].name); // Петя

//Task #10: Перемешайте массив
//Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

let shuffle = array => 
{
    for (let i = array.length - 1; i > 0; i--) 
    {
        const j = Math.floor(Math.random() * (i + 1)); //генерируем случайное число
        [array[i], array[j]] = [array[j], array[i]]; //меняем значения местами
    }
}

let arr = [1, 2, 3];
shuffle(arr);
console.log(arr); // [2, 1, 3] или другие случайные перестановки

shuffle(arr);
console.log(arr); // [1, 3, 2] или другие случайные перестановки

//Task #11: Получить средний возраст
//Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

  function getAverageAge(person) 
  {
    return person.reduce((sum, person) => sum + person.age, 0) / person.length;
  }
  
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 29 };
  
  let arr = [ vasya, petya, masha ];
  
  console.log(getAverageAge(arr)); // 28

//Task #12: Оставить уникальные элементы массива
//Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

function unique(arr) 
{
    let result = [];
  
    for (let str of arr) 
    {
      if (!result.includes(str)) //проверяем есть ли строка в массиве
        {
            result.push(str);
        }
    }
    return result;
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  console.log( unique(strings) ); // кришна, харе, :-O

//Task #13: Создайте объект с ключами из массива
//Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

function groupById(arr) 
{
    return arr.reduce((obj, user) => 
    {
        obj[user.id] = user; 
        return obj;
    }, {}); 
}

let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
console.log(usersById);

//Раздел: Object.keys, values, entries
//Task #1: Сумма свойств объекта
/* Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let sumSalaries = salaries => 
{
    let sum = 0;
    
    for (let salary of Object.values(salaries)) 
    {
        sum += salary; 
    }
    return sum;
}

console.log(sumSalaries(salaries)); // 650

//Task #2: Подсчёт количества свойств объекта
//Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
    name: 'John',
    age: 30
};

let count = obj => Object.keys(obj).length;
console.log(count(user)); // 2

//Раздел: Деструктурирующее присваивание
//Task #1: Деструктурирующее присваивание
/* 
Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
*/

let user = { 
    name: "John", 
    years: 30 
};

let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

//Task #2: Максимальная зарплата
/*
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let topSalary = salaries => 
{
    let maxSalary = 0;
    let topEmployee = null;

    for (let [name, salary] of Object.entries(salaries)) 
    {
        if (salary > maxSalary) 
        {
            maxSalary = salary;
            topEmployee = name;
        }
    }
    return topEmployee;
}

console.log(topSalary(salaries)); // Pete 

//Раздел: Формат JSON, метод toJSON
//Task #1: Преобразуйте объект в JSON, а затем обратно в обычный объект
//Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
    name: "Василий Иванович",
    age: 35
  };
  
  let json = JSON.stringify(user);
  let newUser = JSON.parse(json);
  
  console.log(newUser); // { name: "Василий Иванович", age: 35 }

  //Task #2: Исключить обратные ссылки
  //Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup

  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
  };
  
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log(
    JSON.stringify(meetup, function replacer(key, value) 
    {
      return (key != "" && value == meetup) ? undefined : value;
    })
  );