var colNameRowName = ["", "true", "false", "string", "number", "object", "array", "null", "undefined", "NaN", "0"],
	tableValues = [true, false, "string", 9, {}, [], null, undefined, NaN, 0];

//1. СОЗДАЕМ ТАБЛИЦУ
var table = document.createElement("table"); // Создаем таблицу
table.border = 1;							 // Рамка таблицы

//Создаем шапку таблицы
var thead = document.createElement("thead");		// Шапка таблицы
var tr = document.createElement("tr");				// Строка в шапке таблицы
for (var i = 0; i < colNameRowName.length; i++){	
	var th = document.createElement("th");			// Ячейка в шапке таблицы
	th.innerHTML = colNameRowName[i];				// Заполняем ячейку в шапке таблицы
	tr.appendChild(th);								// Добавляем ячейку в строку шапки таблицы
}
thead.appendChild(tr);								// Добавляем получившуюся строку в шапку таблицы
table.appendChild(thead);							// Полученную шапку добавляем в таблицу

//Создаем тело таблицы
var tbody = document.createElement("tbody");			// Тело таблицы
for (var i = 1; i < colNameRowName.length; i++){		
	var tr = document.createElement("tr");				// Строка в теле таблицы
	var td = document.createElement("td");				// Ячейка в теле таблицы
	td.innerHTML = colNameRowName[i];					// Заполняем ячейку в теле таблицы
	tr.appendChild(td);									// Добавляем ячейку в строку
	for (var j = 1; j < colNameRowName.length; j++){	
		var td = document.createElement("td");			// Остальные ячейки в теле таблицы
		tr.appendChild(td);								// Добавляем ячейки в строки
	}
	tbody.appendChild(tr);								// Добавляем полученные строки в тело таблицы
}

table.appendChild(tbody);								// Добавляем полученное тело таблицы в таблицу

document.body.insertBefore(table, document.getElementsByTagName("script")[0]);	// Выводим таблицу перед <script></script>

//2. КОД ОБРАБОТЧИКОВ СОБЫТИЙ == и ===
function twoSignsEqually(){
	/* Кнопка "==" */

	get_th = document.querySelector("th");			// Получаем самый первый <th></th>
	get_th.innerHTML = "==";						// Присваиваем "=="
	completeTable(get_th.innerHTML, tableValues);	// Вызов функции заполнения таблицы
}

function threeSignsEqually(){
	/* Кнопка "===" */

	get_th = document.querySelector("th");			// Получаем самый первый <th></th>
	get_th.innerHTML = "===";						// Присваиваем "==="
	completeTable(get_th.innerHTML, tableValues);	// Вызов функции заполнения таблицы
}

function completeTable(sign, arr){
	/* Алгоритм заполнения таблицы */

	var tbody = document.getElementsByTagName("tbody")[0];			// Получаем тело таблицы
	for (var row = 0; row < arr.length; row++){
		leftValue = arr[row];										// Получаем "левый" аргумент сравнения
		var tr = tbody.getElementsByTagName("tr")[row].children;	// Получаем строки
		for (var col = 0; col < arr.length; col++){
			sign === "=="											// Сравниваем "левый" аргумент с каждым элементом массива
				? tr[col+1].innerHTML = leftValue == arr[col]		// и записываем результат в ячейку
				: tr[col+1].innerHTML = leftValue === arr[col];			
		}
	}
}