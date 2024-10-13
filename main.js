// first task 
// Написать функцию, которая принимает 2 параметра (числа) 
// и возвращает в консоли самый минимальный из них.
// function func1(a,b) {
//     if (a<b){
//         console.log(a)}
//     else{
//         console.log(b)
//     }
// }
// func1(3, 8)


var func1_1 =(a,b) =>{
    if(a,b){
        console.log(a)}
    else{
        console.log(b)
    }
}
func1_1()

// second task 
// Написать функцию которая принимает 1 параметр в который 
// попадает promt() и вернуть длину строки в консоли.
var func2 = (str) =>{
    var cool = prompt('Напишите слово')
    console.log(cool.length)
}
func2()


///third task 

function calculator() {
    var a = parseFloat(prompt("Введите первое число:"));
    var b = parseFloat(prompt("Введите второе число:"));
    var operator = prompt("Введите символ (+, -, *, /):");

    if (operator === "/" && b === 0) {
        alert("Делить на ноль нельзя");
        return;
    }

    var result;

    if (operator === "/") {
        result = a / b;
    } else if (operator === "*") {
        result = a * b;
    } else if (operator === "-") {
        result = a - b;
    } else if (operator === "+") {
        result = a + b;
    } else {
        alert("Неверный оператор");
        return;
    }

    alert("Результат: " + result);
}
calculator();


