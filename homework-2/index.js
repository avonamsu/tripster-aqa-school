//Тема: Объекты: основы
//Раздел: Объекты

//Task #1: Привет, object
/*Напишите код, выполнив задание из каждого пункта отдельной строкой:
Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.*/

let user = {};
user.nsme = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//Task #2: Проверка на пустоту
//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {
    for (let key in obj) return false;
    return true;
}

//Task #3: Объекты-константы?
//Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
    name: "John"
  };
  
  // это будет работать? - да, изменять нельзя user
  user.name = "Pete";

//Task #4: Сумма свойств объекта
/*У нас есть объект, в котором хранятся зарплаты нашей команды:
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function sumSalaries(salaries) {
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key]; // Добавляем каждую зарплату в сумму
    }
    return sum;
}

let sum = sumSalaries(salaries);
console.log(sum); 

//Task #5: Умножаем все числовые свойства на 2
/*Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
P.S. Используйте typeof для проверки, что значение свойства числовое.*/

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  function multiplyNumeric(menu)
  {
    for (let key in menu)
    {
        if (typeof menu[key] == 'number')
        {
            menu[key] *=2;
        }
    }
  }