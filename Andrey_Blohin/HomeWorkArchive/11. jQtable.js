//1. СОЗДАЕМ ТАБЛИЦУ

var arr11 = [ 
["", ""],
["true", true],
["false", false],
["string", "string"],
["number", 9],
["object", {}],
["array", []],
["null", null],
["undefined", undefined],
["NaN", parseInt("NaN")],
["0", 0]
];

var arr10 = arr11.slice(1);

$(document).ready( function(){

	var table = $("<table/>");		// Создаем таблицу

	//Создаем шапку таблицы
	var thead = $("<thead/>");		// Шапка таблицы
	var tr = $("<tr/>");			// Строка в шапке таблицы
	var th = "";					// Ячейка в строке в шапке таблицы

	$(arr11).each(function(i, item){ th += "<th>" + item[0] + "</th>" });	// Добавляем значение в ячейку в строке шапки таблицы
	table.append(thead.append(tr.append(th)));										// Добавляем полученный заголовок в таблицу

	//Создаем тело таблицы
	var tbody = $("<tbody/>");								// Тело таблицы
	$(arr10).each(function(i, row){
		var tr = $("<tr/>");								// Строка в теле таблицы		
		var td = "";										// Ячейка в теле таблицы
		td += "<td>" + row[0] + "</td>";					// Заполняем значениями первый столбец в теле таблицы																
		$(arr10).each(function(){
			td += "<td></td>";								// Добавляем пустые ячейки в остальные строки в теле таблицы			
		});
		tbody.append(tr.append(td));						// Добавляем полученные строки в тело таблицы
	});
	$("div").append(table.append(tbody).css("border","1px solid black"));	//Выводим таблицу в div и делаем внешнюю рамку таблицы
	$("tr").children().css("border","1px solid black");						//Делаем рамку внутри таблицы
});


//2. КОД ОБРАБОТЧИКОВ СОБЫТИЯ == и ===

$("input:first").click(function(){ completeTable($(this).val(), arr10) });	// ==
$("input:last").click(function(){ completeTable($(this).val(), arr10) });		// ===


function completeTable(sign, arr){
	/* Алгоритм заполнения таблицы данными */

	$("th:first").text(sign);
	var tbody = $("tbody");
	$(arr).each(function(row){										// Обход тела таблицы
		var tr = $($(tbody).children()[row]).children().slice(1);	// Получаем ячейки строки
		$(tr).each(function(col){									// Обход строк
			sign === "=="											// Сравниваем "левый" аргумент с каждым элементом массива
				? $(tr[col]).text(arr[row][1] == arr[col][1])		// и записываем результат в ячейку
				: $(tr[col]).text(arr[row][1] === arr[col][1]);		//
		});
	});
}