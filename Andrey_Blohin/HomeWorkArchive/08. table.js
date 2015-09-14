var tCells = document.body.children[0].tBodies[0],
	someArr = new Array(typeof 5, typeof "5", true, false, NaN, undefined, null, typeof {}, Object.prototype.toString.call([]), 0);

for (i = 0; i < someArr.length; i++){
	for (j = 0; j < someArr.length; j++){
		tCells.rows[i].cells[j+1].innerHTML = someArr[i] == someArr[j];
		t = (someArr[i] == someArr[j]);
		console.log(someArr[i] + " == " + someArr[j] + ": " + t);
	}
	console.log("\n");
}
