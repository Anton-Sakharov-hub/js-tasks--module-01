// const type = typeof 'строка';

// console.log(type);

// const souldRenew = confirm('Хотите продлить подписку?');
// console.log(souldRenew);

// let quantity = Number(prompt('Введите количество товаров'));
// // quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elementWidth = '50.25mm';
// elementWidth = Number.parseFloat(elementWidth);

// console.log('elementWidth:', elementWidth, 'mm;');

// let salary = 1300.12455;
// salary = Number(salary.toFixed(3));

// console.log(Number(salary.toFixed(3)));

// console.log(typeof salary);

// let quantity = '30';
// let value = 'строка';

// console.log(Number(value));
// console.log(typeof Number(value));

// const op1 = 2;
// const op2 = 5;

// const result = Math.pow(op1, op2);

// console.log(2 ** 4);

// const number = Number(prompt('введите число'));
// const power = Number(prompt('введите степень'));

// const result = number ** power;

// console.log(number ** power);

// let counter = 0;

// while (counter < 10) {
//   console.log('counter', counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(i);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const name = '«Генератор защитного поля»'; // Write code on this line
// let price = 1000; // Write code on this line
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line
// price = 2000;
// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code on this line

// console.log(firstMessage);

// console.log(secondMessage);

// Использование тернарного оператора
// Напиши скрипт присвоения переменной message одной из двух строк в зависимости от количества товаров на складе с помощью тернарного оператора.

// Есть переменные

// stock = 100. Это количество товаров на складе.
//   invoice.Эта переменная - количество единиц товара в заказе.Переменной присваиваются только целые положительные числа(проверку на целые положительные числа делать не нужно).Рекомендуем рассмотреть поведение скрипта при трех значениях - 50 т.е.меньше чем stock, 100, т.е.равно stock и 150 - больше чем stock.
//     message.Это переменная для текста с ответом на запрос о покупке.Возможно два значения:
// "На складе недостаточно товаров!" если в заказе указано число, превышающее количество товаров на складе.
// "Заказ оформлен, с вами свяжется менеджер" в оставшихся случаях.

// const stock = 100;
// let invoice = 100;
// // let message = 'На складе недостаточно товаров!';

// // if (invoice <= stock) {
// //   message = 'Заказ оформлен, с вами свяжется менеджер';
// // }

// const message =
//   invoice <= stock
//     ? 'Заказ оформлен, с вами свяжется менеджер'
//     : 'На складе недостаточно товаров!';

// console.log(message);

// let invoice = 1000;
// const stock = 100;

// // Write code under this line
// const message =
//   invoice <= stock
//     ? 'Заказ оформлен, с вами свяжется менеджер'
//     : 'На складе недостаточно товаров!';

// console.log(message);

// Использование if else
//   Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую надо будет записать одно из трех сообщений о результате:

// const CANCELED_BY_USER = 'Отменено пользователем!'
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!'
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!
// Выбор одного из трех значений зависит от того, какое значение будет у переменной userPassword(данные, которые может передать пользователь).Возможны такие варианты:

// const ADMIN_PASSWORD = 'jqueryismyjam'.При таком значении userPassword переменной message следует присвоить ACCESS_IS_ALLOWED.
// null.При таком значении userPassword переменной message следует присвоить CANCELED_BY_USER.
// Любая строка, кроме ADMIN_PASSWORD.При таком значении userPassword переменной message следует присвоить ACCESS_DENIED.
// Используйте if else if else для написания скрипта.

// 1. созд.переменную message, в котрую будут вписывать 3 значения 'Отменено пользователем!', 'Добро пожаловать!', 'Доступ запрещен, неверный пароль!'
// 2. созд.переменную userPassword(данные, которой вводит  пользователь)
// 3. назначить переменную ADMIN_PASSWORD = 'jqueryismyjam'
// 4. если в значении переменной userPassword = ADMIN_PASSWORD, то message = 'ACCESS_IS_ALLOWED'
// 5. если userPassword = null, то message = CANCELED_BY_USER
// 6. и если userPassword != ADMIN_PASSWORD, то message = ACCESS_DENIED

// let message;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// const ADMIN_PASSWORD = 'jqueryismyjam';

// const userPassword = false;
// console.log(userPassword);

// if (userPassword === ADMIN_PASSWORD) {
//   message = ACCESS_IS_ALLOWED;
// } else if (userPassword === null) {
//   message = CANCELED_BY_USER;
// } else if (userPassword !== ADMIN_PASSWORD) {
//   message = ACCESS_DENIED;
// }

// console.log(message);

// Использование if else и арифметических операторов
// Напиши скрипт имитирующий вывод сообщений о списании средств на покупку товара.

// Переменная credits хранит количество средств - 23580 кредитов.

// Единица товара(дроида) стоит 3000 кредитов за штуку и это значение хранится в переменной pricePerDroid.

// Переменная orderPieces принимает значения null(отказ от покупок) и целое положительное число(количество единиц товара).

// Переменная message будет выводить сообщение.В эту переменную надо будет записать одно из трех сообщений о результате:

// const CANCELED_BY_USER = 'Отменено пользователем!'
// Вы купили ${ } дроидов, на счету осталось ${ } кредитов
// const ACCESS_DENIED = 'Недостаточно средств на счету!'
// Используйте вспомогательную переменную totalPrice, которая принимает рассчитанную общую цену заказа.
// Используйте вспомогательную переменную balanceCredit, которая принимает разницу между credits и totalPrice.
// А также используйте if else для выбора значений переменной message.

// const credits = 23580;
// const pricePerDroid = 3000;
// const orderPieces = null;
// let message;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';
// const totalPrice = orderPieces * pricePerDroid;
// const balanceCredit = credits - totalPrice;

// if (totalPrice > credits) {
//   message = ACCESS_DENIED;
// } else if (orderPieces === null) {
//   message = CANCELED_BY_USER;
// } else {
//   message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
// }

// console.log(message);

// Использование switch, if и методов slice, toUpperCase, toLowerCase
// Напиши скрипт имитирующий оформление заказа в избранную страну.

// Пользователь может оформить доставку товара к себе в страну, указав ее в переменной countryName.Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.Поэтому надо перезаписать текст переменной countryName так, чтобы первая буква(свойство[0]) была заглавной(метод toUpperCase), а остальные буквы(метод slice) были в нижнем регистре(метод toLowerCase).

// Переменная message будет выводить сообщение.В эту переменную надо будет записать одно из трех сообщений о результате:

// const CANCELED_BY_USER = 'Отменено пользователем!'
// Доставка в ${ } будет стоить ${ } кредитов
// const NO_DELIVERY = 'В выбранную страну доставка не доступна.
// Для определения стоимости(переменная price) или записи сообщения о невозможности доставки используй switch.

// В случае, если доставка возможна(цена больше 0), сформируй сообщение о стоимости доставки в указанную страну с помощью if.

// Ниже приведен список стран и стоимость доставки.

//   Китай - 100 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// 1. созд пер.countryName, которая должна быть записана с большой буквы для этого примен.обращаемся по индексу к 0 литералу строки и прим метод ToUpperCase.И с помощью метода слайс отделяем все литералы начиная с 1 и прим.метод ToLowerCase
// 2. Назначю перем.message 3 значения:
// - const CANCELED_BY_USER = 'Отменено пользователем!'
//   - Доставка в ${ } будет стоить ${ } кредитов
// - const NO_DELIVERY = 'В выбранную страну доставка не доступна.
// 3. созд перем.price
// 4. использовать метод switch для определения перем.price и выведение сообщения о не возможности доставки
// 5. Досьавка возможна, цена больше 0. Вывести сообщение о ценне доставки для пользователя

// Китай - 100 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// const countryName = `${ToUpperCase(index[0])} + ${ToLowerCase(slice(1))}`;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка не доступна.';
// let message;
// let price = 0;

const countryName = 'индия';

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
  switch (country) {
    case 'Китай':
      price = 100;
      break;
    case 'Австралия':
      price = 170;
      break;
    case 'Индия':
      price = 80;
      break;
    case 'Ямайка':
      price = 120;
      break;

    default:
      price = 0;
  }
}
if (price > 0) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
} else {
  message = NO_DELIVERY;
}

console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'

// const countryName = 'киТай';
// let country;
// country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();

// console.log(country);
