//Тема: Классы
//Раздел: Класс: базовый синтаксис

//Task #1: Перепишите класс
//Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.

class Clock
{
    constructor(template)
    {
        this.template = template;
    }
  
    render() 
    {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() 
    {
      clearInterval(this.timer);
    }
  
    start() 
    {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  
}
  
  let clock = new Clock('h:m:s');
  clock.start();

  //Раздел: Наследование классов
  //Task #1: Ошибка создания экземпляра класса
  /*
  В коде ниже класс Rabbit наследует Animal.
К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.
*/

class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) 
    {
      super(name); //До исправления: this.name = name;
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("Белый кролик"); 
  console.log(rabbit.name);

  //Task #2: Улучшенные часы
/* 
Создайте новый класс ExtendedClock, который будет наследоваться от Clock 
и добавьте параметр precision – количество миллисекунд между «тиками». 
Установите значение в 1000 (1 секунда) по умолчанию.
*/

class ExtendedClock extends Clock
{
    constructor(template, precision = 1000)
    {
        super(template);
        this. precision = precision;
    }

    start()
    {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
}

let clock = new ExtendedClock('h:m:s');
clock.start();

  //Раздел: Статические свойства и методы
  //Task #1: Класс расширяет объект?
  /* 
  Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, например hasOwnProperty.

Пример:

class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

// метод hasOwnProperty от Object.prototype
alert( rabbit.hasOwnProperty('name') ); // true
Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?

В чем разница?

Ниже пример кода с таким наследованием (почему он не работает? исправьте его):
*/

class Rabbit extends Object {
  constructor(name) {
    super(); // Ошибка тут. Перед this нужно вызывать конструктор Object
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");
console.log(rabbit.hasOwnProperty('name') ); // Ошибка