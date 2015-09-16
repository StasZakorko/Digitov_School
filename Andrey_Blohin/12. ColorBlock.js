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
					"width": "50px",
					"height": "50px",
					"border": "1px solid #000",
					"position": "absolute",
					"background-color": color
				})
				.append($("<span>").addClass("close").text("X"))
			);
	} else { alert("Выберите цвет.") }

	//Удалить блок
	$("span").click(function(){
		$("span").parent().remove();
		color = "";
	});

	$(document).keydown(function(event){
		switch (event.keyCode){
			case 38: $(".block").offset(function(i, pos){ return {top: pos.top - 10, left: pos.left} }); break;
			case 39: $(".block").offset(function(i, pos){ return {top: pos.top, left: pos.left + 10} }); break;
			case 40: $(".block").offset(function(i, pos){ return {top: pos.top + 10, left: pos.left} }); break;
			case 37: $(".block").offset(function(i, pos){ return {top: pos.top, left: pos.left - 10} }); break;
		}
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