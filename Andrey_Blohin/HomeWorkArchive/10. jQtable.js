//1. СОЗДАЕМ ТАБЛИЦУ

$(document).ready( function(){
	var colNameRowName = ["", "true", "false", "string", "number", "object", "array", "null", "undefined", "NaN", "0"];

	var table = $("<table/>");		// Создаем таблицу	

	//Создаем шапку таблицы
	var thead = $("<thead/>");		// Шапка таблицы
	var tr = $("<tr/>");			// Строка в шапке таблицы
	var th = "";					// Ячейка в строке в шапке таблицы

	for (var i = 0; i < colNameRowName.length; i++){
		th += "<th>" + colNameRowName[i] + "</th>";		// Добавляем значение в ячейку в строке шапки таблицы
	}
	table.append(thead.append(tr.append(th)));			// Добавляем полученный заголовок в таблицу

	//Создаем тело таблицы
	var tbody = $("<tbody/>");								// Тело таблицы
	for (var i = 1; i < colNameRowName.length; i++){
		var tr = $("<tr/>");								// Строка в теле таблицы		
		var td = "";											// Ячейка в теле таблицы
		td += "<td>" + colNameRowName[i] + "</td>";			// Заполняем значениями первый столбец в теле таблицы																
		for (var j = 1; j < colNameRowName.length; j++){
			td += "<td></td>";								// Добавляем пустые ячейки в остальные строки в теле таблицы			
		}
		tbody.append(tr.append(td));						// Добавляем полученные строки в тело таблицы
	}
	$("div").append(table.append(tbody).css("border","1px solid #000"));	//Выводим таблицу в div и делаем внешнюю рамку таблицы
	$("tr").children().css("border","1px solid #999");						//Делаем рамку внутри таблицы
});


//2. КОД ОБРАБОТЧИКОВ СОБЫТИЯ == и ===

$("input:first").click(function(){
	/* == */

	completeTable(this.value, [true, false, "string", 9, {}, [], null, undefined, parseInt("NaN"), 0]);
});


$("input:last").click(function(){
	/* === */

	completeTable(this.value, [true, false, "string", 9, {}, [], null, undefined, parseInt("NaN"), 0]);
});


function completeTable(sign, arr){
	/* Алгоритм заполнения таблицы данными */

	$("th:first").text(sign);
	var tbody = $("tbody").children();					// Получаем строки таблицы
	for (var row = 0; row < arr.length; row++){			// Обход тела таблицы
		var tr = tbody[row].children;					// Получаем ячейки строки	
		leftValue = arr[row];							// Получаем "левый" аргумент сравнения	
		for (var col = 0; col < arr.length; col++){					// Обход строк
			sign === "=="											// Сравниваем "левый" аргумент с каждым элементом массива
				? tr[col+1].innerHTML = leftValue == arr[col]		// и записываем результат в ячейку
				: tr[col+1].innerHTML = leftValue === arr[col];		//
				//? tr[col+1].text(leftValue == arr[col])		// и записываем результат в ячейку
				//: tr[col+1].text(leftValue === arr[col];		//
		}
	}
}

/*
=== Вопросы ===
1) Селекторы таблицы (table, thead, tbody и т. д.) не хотят создаваться как var table = $("table"), 
но с удовольствием создаются вот так: var table = $("<table/>"). Почему?
2) В 39-й и 46-й строчках приходится писать this.value, ибо this.val() не понимает. Почему?
3) В 60-й и 61-й строчках не работает ? tr[col+1].text(leftValue == arr[col]). Почему?
*/