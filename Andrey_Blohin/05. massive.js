function sSort(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
var usrEntry = prompt("Введите последовательность через запятую:").match(/\d+/g);
usrEntry.forEach(function(item, i){ usrEntry[i] = +item });
alert(usrEntry.sort(sSort));
//alert(typeof usrEntry[0]); //Для проверки типа