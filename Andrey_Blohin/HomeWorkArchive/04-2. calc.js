//2) написать функцию — калькулятор!
//    Задача:
//- пользователь имеет возможность ввести два значения, и знак операции. (можете использовать prompt, либо input у кого html не вызывает трудностей)
//- по нажатию кнопки « = » или «ОК» модального окна , получить решение, и вывести пользователю
//- не забываем что на 0 делить нельзя.

function clearDataEntryForm(){
	//Очистка формы ввода

	document.getElementById("data-entry-form").value = 0;
}

function getUserInput(userInput){
	//Получение пользовательского ввода и его вывод в форму

	var dataEntryForm = document.getElementById("data-entry-form");

	//Условие удовлетворяющее требованию: "пользователь имеет возможность ввести ТОЛЬКО два значения, и ОДИН знак операции."

	//Истина когда не соответствует шаблону
	if ( !/-{0,1}(?:\d+(?:\.|,)\d+|\d+)[\/\*\-\+](?:\d+(?:\.|,)\d+|\d+)/.test(dataEntryForm.value) ){

		//Следущие 2 условия срабатывают, когда пользователь вводит несколько нулей сначала, либо сразу после знака операции
		if ( (dataEntryForm.value).match(/^0$/) && /\d/.test(userInput) ){
			dataEntryForm.value = (dataEntryForm.value).replace(/^0/, userInput);
		} else if ( (dataEntryForm.value).match(/[\/\*\-\+]0+$/) && /[\/\*\-\+\d]/.test(userInput) ){
			dataEntryForm.value = (dataEntryForm.value).replace(/0+$/, userInput);

		//Следущее условие срабатывают, когда пользователь вводит несколько знаков операций
		} else if ( (dataEntryForm.value).match(/\d+[\,\.]$/) && /[\/\*\-\+]/.test(userInput) ){
			dataEntryForm.value = (dataEntryForm.value).replace(/[\,\.]/, userInput);

		//Если после точки пользователь вводит знак операции, то точка затирается
		} else if ( (dataEntryForm.value).match(/[\/\*\-\+]$/) && /[\/\*\-\+]/.test(userInput) ){
			dataEntryForm.value = (dataEntryForm.value).replace(/[\/\*\-\+]$/, userInput);

		//Если пользователь пытается ввести "." или "," несколько раз подряд после знака операции
		} else if ( (dataEntryForm.value).match(/[\/\*\-\+]$/) && /[\.\,]/.test(userInput) ){
			dataEntryForm.value = (dataEntryForm.value).replace(/[\.\,]$/, "0.");

		//Если пользователь пытается ввести "." или "," в дробной части десятичной дроби, то у него ничего не получится
		//Или если после знака операции вводится "." или ","
		//Или если пользователь пытается ввести "." или "," несколько раз подряд после знака "." или ","
		} else if ( ((dataEntryForm.value).match(/[\.\,]\d+$/) && /[\.\,]/.test(userInput))
			|| ((dataEntryForm.value).match(/[\/\*\-\+]$/) && /[\.\,]/.test(userInput))
			|| ((dataEntryForm.value).match(/[\,\.]$/) && /[\.\,]/.test(userInput)) ){

		//Если в дробной части одни нули, то они автоматически заменяются на вводимые пользователем допустимые символы
		} else if ( (dataEntryForm.value).match(/\d+[\,\.]0+$/) && /[\/\*\-\+]/.test(userInput)) {
			dataEntryForm.value = (dataEntryForm.value).replace(/[\,\.]0+$/, userInput);

		//Если в конце дробной части лишние нули, то они автоматически заменяются на вводимые пользователем допустимые символы
		} else if ( (dataEntryForm.value).match(/\d+[\,\.]\d+0+$/) && /[\/\*\-\+]/.test(userInput) ){
			dataEntryForm.value = (dataEntryForm.value).replace(/0+$/, userInput);

		} else {dataEntryForm.value += userInput;}

	//Истина когда соответствует шаблону и второе число должно быть дробным
	} else if (/[\.\,\d]/.test(userInput)){

		//Если пользователь пытается ввести "." или "," несколько раз подряд
		if ( (dataEntryForm.value).match(/[\.\,]$/) && /[\.\,]/.test(userInput) ){
			dataEntryForm.value = (dataEntryForm.value).replace(/[\.\,]$/, userInput);

		//Если пользователь пытается ввести "." или "," в дробной части десятичной дроби, то у него ничего не получится
		} else if ( (dataEntryForm.value).match(/[\.\,]\d+$/) && /[\.\,]/.test(userInput) ){

		//Если пользователь вводит несколько нулей сразу после знака операции
		} else if ( (dataEntryForm.value).match(/[\/\*\-\+]0+$/) && /[\/\*\-\+\d]/.test(userInput)) {
			dataEntryForm.value = (dataEntryForm.value).replace(/0+$/, userInput);
		} else {dataEntryForm.value += userInput;}
	}
}

//НЕ УСПЕЛ РЕАЛИЗОВАТЬ
function getPlusOrMinus(){
	//var dataEntryForm = document.getElementById("data-entry-form");
	//dataEntryForm.value = (dataEntryForm.value).replace(/-{0,1}(?:\d+(?:\.|,)\d+|\d+)[\,\.]{0,1}$/, (dataEntryForm.value).match(/-{0,1}(?:\d+(?:\.|,)\d+|\d+)[\,\.]{0,1}$/) * (-1));
}

function getBackSpace(){
	// Посимвольное удаление справа налево

	var dataEntryForm = document.getElementById("data-entry-form");
	dataEntryForm.value = (dataEntryForm.value).substring(0, dataEntryForm.value.length-1);
	if (dataEntryForm.value === ""){dataEntryForm.value = "0";}
}

function calculate(){
	//Расчет

	var dataEntryForm = document.getElementById("data-entry-form");
	if ( !(/(\/0*[\.\,]0*[^1-9]$)|(\/0*[^1-9]$)/.test(dataEntryForm.value)) ){
		var num = (dataEntryForm.value).match(/(?:\d+(?:\.|,)\d+|\d+)/g);

		//match-чим операцию с конца строки, ибо с начала строки может стоять минус
		var operation = ( (dataEntryForm.value).match(/[\/\*\-\+](?:\d+(?:\.|,)\d+|\d+)$/).toString() ).match(/[\/\*\-\+]/).toString();
		if ( num.length == 2 ){
			switch ( operation ){
				//Арифметические операции с учетом того, что первое число может быть отрицательным
				case "/": /^\-/.test(dataEntryForm.value) ? dataEntryForm.value = 0 - (num[0] / num[1]) : dataEntryForm.value = num[0] / num[1]; break;
				case "*": /^\-/.test(dataEntryForm.value) ? dataEntryForm.value = 0 - (num[0] * num[1]) : dataEntryForm.value = num[0] * num[1]; break;
				case "-": /^\-/.test(dataEntryForm.value) ? dataEntryForm.value = 0 - num[0] - num[1] : dataEntryForm.value = num[0] - num[1]; break;
				case "+": /^\-/.test(dataEntryForm.value) ? dataEntryForm.value = 0 - (num[0] - num[1]) : dataEntryForm.value = +num[0] + +num[1]; break;
			}
		}
	} else {alert("На ноль делить нельзя!");}
}

$(document).keyup(function(event){
	//Реализация горячих клавиш. Код начала функции мне неведом, но работает)))))

	switch ( event.keyCode ){
		case 8: getBackSpace(); break;			//Backspace
		case 96: getUserInput("0"); break;
		case 97: getUserInput("1"); break;
		case 98: getUserInput("2"); break;
		case 99: getUserInput("3"); break;
		case 100: getUserInput("4"); break;
		case 101: getUserInput("5"); break;
		case 102: getUserInput("6"); break;
		case 103: getUserInput("7"); break;
		case 104: getUserInput("8"); break;
		case 105: getUserInput("9"); break;
		case 106: getUserInput("*"); break;
		case 107: getUserInput("+"); break;
		case 109: getUserInput("-"); break;
		case 110: getUserInput("."); break;
		case 111: getUserInput("/"); break;
		case 13: calculate(); break;			//Enter
		case 46: clearDataEntryForm(); break;	//Delete
	}
});



// комментарий к ДЗ
// function(event) - event - это событие, действие пользователя, имеет свои методы, по которым можно привязаться не только к тому, что сделал пользователь, как в данном случае,
// но и где, например кликнул по блоку, нажал на кнопку, проскролил в области, и многое другое

// В целом хорошо, даже стилизировал бутстрапом, вижу что вы разобрались с регулярными выражениями, это хорошо, но есть в скрипте ошибочка,
// попробуйте провести арифметическую операцию, где у Вас вторым значением будет двухзначное число, 2*50
// не срабатывает if ( !(/0[\.\,]{0,1}0*$/.test(dataEntryForm.value)) ) , возможно проблема в условии регулярного выражения
