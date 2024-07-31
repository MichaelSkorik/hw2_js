//Задача 1

let num1 = parseFloat(prompt("Введите значение для num1:"));
let num2 = parseFloat(prompt("Введите значение для num2:"));

if (num1 <= 1 && num2 >= 3) {
    console.log("num1 меньше или равен 1 и num2 больше или равен 3");
} else {
    console.log("Условия не выполняются");
}

//Задача 2

let test = true;
console.log(test === true ? '+++' : '---');

//Задача 3

let day = parseInt(prompt("Введите число от 1 до 31:"));

if (day >= 1 && day <= 10) {
    console.log("Первая декада");
} else if (day >= 11 && day <= 20) {
    console.log("Вторая декада");
} else if (day >= 21 && day <= 31) {
    console.log("Третья декада");
} else {
    console.log("Некорректное значение дня");
}