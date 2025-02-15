//Task #1: "Привет, мир!" - Вызвать alert

    console.log("Я JavaScript!");

//Task #2: "Строгий режим — "use strict"""

    "use strict"
    console.log("Код работает в строгом режиме");

//Task #3.1: "Переменные" - Работа с переменными

    let admin;
    let name = "Джон";

    admin = name;
    console.log(admin);

//Task #3.2: "Переменные" - Придумайте правильные имена

    //1.Создайте переменную для названия нашей планеты. Как бы вы её назвали?
    let planetEarth;
    //2. Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?
    let currentUserName;

//Task #3.3: "Переменные" - Какие буквы (заглавные или строчные) использовать для имён констант?
    const BIRTHDAY = '18.04.1982';
    const age = someCode(BIRTHDAY); 

//Task #4: "Типы данных" - Шаблонные строки

let names = "Ilya";

console.log( `hello ${1}` ); // hello 1

console.log( `hello ${"name"}` ); // hello name

console.log( `hello ${names}` ); // hello Ilya

//Task #5: "Взаимодействие: alert, prompt, confirm" - "Простая страница"

console.log("Как вас зовут?");
let username = "Михаил";
console.log("Михаил"); 

//Task #6: Считывание и преобразование пользовательского ввода
let num = 15;
let _null = null;

console.log("Строковое преобразование: " + String(num));
console.log("Численное преобразование: " + Number(num));
console.log("Логическое преобразование: " + `${Boolean(num)}\n`);

console.log("Строковое преобразование: " + String(_null));
console.log("Численное преобразование: " + Number(_null));
console.log("Логическое преобразование: " + Boolean(_null));

//Task #7: "Базовые операторы, математика" - "Постфиксная и префиксная формы"
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

//Task #8: "Базовые операторы, математика" - "Результат присваивания"
let a = 2;

let x = 1 + (a *= 2); //5

//Task #9: "Базовые операторы, математика" - "Преобразование типов"
"" + 1 + 0 //1
"" - 1 + 0 //-1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //9px
"$" + 4 + 5 //$45
"4" - 2 //2
"4px" - 2 //NaN
"  -9  " + 5 //-9  5
"  -9  " - 5 //-14
null + 1 //1
undefined + 1 //NaN
" \t \n" - 2 // -2

//Task #10: "Базовые операторы, математика" - "Исправьте сложение"
let a = "1";
let b = "2";

console.log(a + b); // 12

a = Number(a);
b = Number(b);
console.log(a + b); //3

//Task #11: "Операторы сравнения" - "Операторы сравнения"
5 > 4 //true
"ананас" > "яблоко" //false
"2" > "12" //false
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false

//Task #12: "Условное ветвление: if, '?'" - "if (строка с нулём)"

//Выведется ли alert? - да
if ("0") {
  alert( 'Привет' );
}

//Task #13: "Условное ветвление: if, '?'" - "Название JavaScript"
/*Используя конструкцию if..else, напишите код, который будет спрашивать:
 „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», 
в противном случае – отобразить: «Не знаете? ECMAScript!»*/

console.log("Какое «официальное» название JavaScript?");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Введите значение: ", function(inputValue) {
    let userInput = inputValue; // Записываем ввод в переменную
    console.log("Вы ввели:", userInput);
    rl.close(); // Закрываем ввод
});

if("ECMAScript"){
    console.log("Верно!");
}
else
{
    console.log("Не знаете? ECMAScript!");
}

//Task #14: "Условное ветвление: if, '?'" - "Покажите знак числа"
/*Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.*/
if(number > 0)
{console.log(1)}
else if (number < 0)
{console.log(-1)}
else
{console.log(0)};

//Task #15: "Условное ветвление: if, '?'" - "Перепишите 'if' в '?'"
/*Перепишите конструкцию if с использованием условного оператора '?':

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}*/

let result = (a + b < 4) ? 'Мало' : 'Много';

//Task #16: "Условное ветвление: if, '?'" - "Перепишите 'if..else' в '?'"
/*Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости рекомендуется разбить код на несколько строк.

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}*/

let message = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' : 
'' ;

//Task #17: "Логические операторы" - "Что выведет alert (ИЛИ)?"
console.log( null || 2 || undefined ); //2

//Task #18: "Логические операторы" - "Что выведет alert (ИЛИ)?"
console.log( console.log(1) || 2 || console.log(3) ); //1 2 

//Task #19: "Логические операторы" - "Что выведет alert (И)?"
console.log( 1 && null && 2 ); //null

//Task #20: "Логические операторы" - "Что выведет alert (И)?"
console.log( console.log(1) && console.log(2) ); //1 undefined

//Task #21: "Логические операторы" - "Что выведет этот код?"
console.log( null || 2 && 3 || 4 ); //3

//Task #22: "Логические операторы" - "Что выведет этот код (||=, &&=)?"

let value = NaN;

value &&= 10; //NaN
value ||= 20; //20
value &&= 30; //30
value ||= 40; //30

console.log(value);

//Task #23: "Логические операторы" - "Проверка значения из диапазона"
let _age = 10;

if (_age >= 14 && _age <= 90)
{
    console.log(true);
}
else console.log(false);

//Task #24: "Логические операторы" - "Проверка значения вне диапазона"
let _age = 80;

if (!(_age >= 14 && _age <= 90))
{
    console.log(true);
}
else console.log(false);

//Task #24: "Логические операторы" - "Вопрос об "if""
if (-1 || 0) console.log( 'first' ); //first
if (-1 && 0) console.log( 'second' ); //no 
if (null || -1 && 1) console.log( 'third' ); //third

//Task #24: "Логические операторы" - "Проверка логина"
const readline = require('readline');

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });
    
rl.question("Введите логин: ", (login) => {
    
if (login === "Админ")
{
    rl.question("Введите пароль: ", (password) => {
        if (password === "Я главный")
        {
            console.log("Здравствуйте!");
        }
        else if (password === null || password === "")
        {
            console.log("Отменено");
        }
        else
        {
            console.log("Неверный пароль!");
        }
        rl.close();
    });
}
else if (login === null || login === "")
{
    console.log("Отменено");
    rl.close();
}
else
    {
        console.log("Я вас не знаю");
        rl.close(); 
    }
});

//Task #25: "Операторы нулевого слияния и присваивания: '??', '??='" - "Что выведет этот код?"

console.log(undefined ?? NaN ?? null ?? "" ?? " "); //NaN

//Task #26: "Операторы нулевого слияния и присваивания: '??', '??='" - "Какой будет результат выполнения этого кода?"
let city = null;

city ??= "Берлин"; //Берлин
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

console.log(city); //Берлин

//Task #27: "Операторы нулевого слияния и присваивания: '??', '??='" - "Перепишите код используя операторы ??, ??="
/*let num1 = 10,
    num2 = 20,
    result;

if (result === null || result === undefined) {
  if (num1 !== null && num1 !== undefined) {
    result = num1;
  } else {
    result = num2;
  }
}*/

let num1 = 10,
    num2 = 20,
    result;

    result ??= num1 ?? num2;
    console.log(result);


//Task #28: "Циклы while и for" - "Последнее значение цикла"
//Какое последнее значение выведет этот код? Почему?"
let i = 3;

while (i) {
  alert( i-- ); //1, не будет выполняться когда i = 0
}

//Task #29: "Циклы while и for" - "Какие значения выведет цикл while?"
//Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
let i = 0;
while (++i < 5) alert( i ); //1 2 3 4, ++i сначала увеличит i, а потом произойдёт сравнение

let i = 0;
while (i++ < 5) alert( i ); //1 2 3 4 5 

//Task #30: "Циклы while и for" - "Какие значения выведет цикл for?"
//Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
for (let i = 0; i < 5; i++) alert( i ); //0 1 2 3 4 

for (let i = 0; i < 5; ++i) alert( i ); // 0 1 2 3 4 

//Task #31: "Циклы while и for" - "Выведите чётные числа"
//При помощи цикла for выведите чётные числа от 2 до 10.

for (let i = 1; i <= 10; i++) alert(++i);

//Task #32: "Циклы while и for" - "Замените for на while"
//Перепишите код, заменив цикл for на while, без изменения поведения цикла.
/*for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }*/
    let i = 0;
    while (i < 3)
    {
       alert( `number ${i}!` );
       i++
    }

//Task #33: "Циклы while и for" - "Повторять цикл, пока ввод неверен"
/*Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.*/

let count = 99;

do
{
    console.log("Введите число больше 100: ");
}
    while (count < 100 && count);

//Task #34: "Циклы while и for" - "Вывести простые числа"
/* Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

Напишите код, который выводит все простые числа из интервала от 2 до n.

Для n = 10 результат должен быть 2,3,5,7.

P.S. Код также должен легко модифицироваться для любых других интервалов.*/

let n = 10;

nextNumber:
for (let i = 2; i <= n; i++)
{
    for (let m = 2; m < i; m++)
    {
        if (i % m == 0) continue nextNumber;
    }
        console.log(i);
}

//Task #35: "Конструкция "switch"" - "Напишите "if", аналогичный "switch""
//Напишите if..else, соответствующий следующему switch:
/* switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}*/
let browser = 'Safari';

if (browser == 'Edge')
{
    console.log( "You've got the Edge!" );
}
else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera')
{
    console.log( 'Okay we support these browsers too' );
}
else 
{
    console.log( 'We hope that this page looks ok!' );
}

//Task #36: "Конструкция "switch"" - "Переписать условия "if" на "switch""
//Перепишите код с использованием одной конструкции switch:
/* const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}*/
console.log('Введите число между 0 и 3');
let number = 1;
switch(number)
{
    case 0:
        console.log('Вы ввели число 0');
        break;
    
    case 1:
        console.log('Вы ввели число 1');
        break;

    case 2:
    case 3:
        console.log('Вы ввели число 2, а может и 3');
        break;
}

//Task #37: "Функции" - "Обязателен ли "else"?"
/*Следующая функция возвращает true, если параметр age больше 18.
В ином случае она запрашивает подтверждение через confirm и возвращает его результат:*/
//Будет ли эта функция работать как-то иначе, если убрать else?

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Родители разрешили?');
    }
  }

  //Будет ли эта функция работать как-то иначе, если убрать else? - нет

  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Родители разрешили?');
  }

//Task #37: "Функции" - "Перепишите функцию, используя оператор '?' или '||'"
/*Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
Сделайте два варианта функции checkAge:
Используя оператор ?
Используя оператор ||*/
  
  function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?')
  }

  function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?')
  }

//Task #38: "Функции" - "Функция min(a, b)"
//Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

    function min(a, b)
    {
        return (a < b) ? a : b;
    }

//Task #39: "Функции" - "Функция pow(x,n)"
//Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

let x = 2;
let n = 10;

function pow(x,n)
{
    return (x ** n);
}

let count = pow(x, n);
console.log(count);

//Task #40: "Стрелочные функции, основы" - "Перепишите с использованием функции-стрелки"
//Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    () => console.log("Вы согласились."),
    () => console.log("Вы отменили выполнение.")
  );









    

