// домашнее задание №4

//1) для проверки усвоения материала по циклам
//напишем маленькую игру «Угадай число»
//Задача: написать скрипт, который при загрузке страницы генерирует число от 0 до 100 ( воспользуйтесь методом Math.random( ), кто не разберется, используйте модальное окно, для ввода числа пользователем ).
//и вы должны это число угадать, вызывается модальное окно в котором пользователь вводит число, если оно не верно, то всплывает подсказка, больше это число от загаданного, или меньше. Если же пользователь угадал, то сообщения о победе в котором присутствует информация о колличестве попыток, потраченных на угадывание.
//
var spejamas_sk=Math.floor(Math.random()*99+1);
var i = 1;
function Guess(){
    var x=document.getElementById("number").value;
    if (x == ""){
        document.getElementById("result").innerHTML = "Please enter number";
        } else {
        var guess = document.getElementsByClassName("guess");
        if (x!=spejamas_sk){
            document.getElementById("result").innerHTML = "Sorry you not guessed"; 
            if (x<= spejamas_sk){
                document.getElementById("answer").innerHTML = "less  from the conceived number >";
                }
            if (x>= spejamas_sk){
                document.getElementById("answer").innerHTML = "< more from the conceived number"; 
                }
            if (document.onclick = guess) {i++;}
        }else{
            document.getElementById("result").innerHTML = "Congratulate you guessed"; 
            document.getElementById("answer").innerHTML = "You tried to guess  "+i+" times";
        }
    }
}



//2) написать функцию — калькулятор!
//    Задача:
//- пользователь имеет возможность ввести два значения, и знак операции. (можете использовать prompt, либо input у кого html не вызывает трудностей)
//- по нажатию кнопки « = » или «ОК» модального окна , получить решение, и вывести пользователю
//- не забываем что на 0 делить нельзя.

function Calc() {
    var x = parseFloat(document.getElementById("number1").value);
    document.getElementById('number1').onkeypress = function (e) {
    return !(/[А-Яа-яA-Za-z ]/.test(String.fromCharCode(e.charCode)));
        }
    if (x != document.getElementById("number1").value){
            document.getElementById("number1").value = "value error";
        }
    var y = parseFloat(document.getElementById("number2").value);
    document.getElementById('number2').onkeypress = function (e) {
    return !(/[А-Яа-яA-Za-z ]/.test(String.fromCharCode(e.charCode)));
        }
    if (y != document.getElementById("number2").value){
        document.getElementById("number2").value = "value error";
        }
    var op = document.getElementById("operator").value;
    switch (op){
        case "+":
            document.getElementById("resultcalc").value = x+y;
            break;
        case "-":
            document.getElementById("resultcalc").value = x-y;
            break;
        case "*":
            document.getElementById("resultcalc").value = x*y;
            break;
        case "/":
            if (y != 0){
                document.getElementById("resultcalc").value = x/y;
            } else {
                document.getElementById("resultcalc").value = "Division by zero is undefined";
                }
            break;
        default: 
            document.getElementById("operator").value = "NaN";
    }
    // if (op == "+"){
            // document.getElementById("resultcalc").value = x+y;
        // } else if (op == "-"){
            // document.getElementById("resultcalc").value = x-y;
        // } else if (op == "*"){
            // document.getElementById("resultcalc").value = x*y;
        // } else if (op == "/"){
            // if (y != 0){
                // document.getElementById("resultcalc").value = x/y;
            // } else {
                // document.getElementById("resultcalc").value = "Division by zero is undefined";
                // }
    // } else { 
        // document.getElementById("operator").value = "NaN";
        // }
}

// комментарий к ДЗ (калькулятор)
// скрипт работает, предлогаю усовершенствовать его и сделать так, чтобы в поля для ввода цифр нельзя было вводить буквы

