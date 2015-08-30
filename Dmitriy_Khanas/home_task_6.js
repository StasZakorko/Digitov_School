function func(){
var car = {};
var car2 = {};
car.model = "Opel";
car2.model = "Reno";
car.engine = 1.7;
car2.engine = 1.5;
car.year = 2000;
car2.year = 1999;
car.model = "Mazda";
del = function() {
    delete this.year;
}

car.dele=del;
car.dele();
car2.dele = del;
car2.dele();
console.log(car);
console.log(car2);

function getattr(){
    console.log(this.model+ "  " + this.engine)
}
car.getattribute = getattr;
car2.getattribute = getattr;

car.getattribute();
car2.getattribute();
}