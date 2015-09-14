var color = "";

// Установить цвет блока
$(".palette > a").click(function(){ color = $(this).css("backgroundColor") });

// Создать блок
$(".btn-default").click(function(){
	if (color){
		$(".block-area").empty()
			.append(
				$("<div>").addClass("block")
				.css({
					"width": "100px",
					"height": "100px",
					"border": "1px solid #000",
					"background-color": color
				})
				.append(
					$("<span>").addClass("close")
						.text("X")
				)
			);
	} else { alert("Выберите цвет.") }

	//Удалить блок
	$("span").click(function(){
		$("span").parent().remove();
		color = "";
	});
});

/*$("span").click(function(){
		$("span").parent().remove();
		color = "";
	});*/


/*
======== ВОПРОСЫ =============

1) Функция "Удалить блок" срабатывает ТОЛЬКО внутри функции "Создать блок", но не работает вне ее.
Как это исправить?

2) Существует ли внятный дебаггер для jQuery? Встроенный в Хром только для JS, как я понял.

*/