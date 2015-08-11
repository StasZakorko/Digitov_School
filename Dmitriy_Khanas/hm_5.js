function comNum(a, b) {
        return a - b;
        }

function sort() {
    var arr = prompt("enter array");
    var tagList = arr.split(",");
    var lastarr = []
    var sorttag = tagList.sort(comNum);
    sorttag.forEach(function(entry){
        if (entry == parseFloat(entry)){
            lastarr.push(entry);}
        });
    alert(lastarr);
}