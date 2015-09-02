//Создайте два пустых объекта car и car2.
var car = {},
	car2 = {};

//Добавьте в них свойство model со значением марки авто.
car.model = "ford";
car2.model = "lada";

//Добавьте свойство engine со значением объема двигателя, и значение year с годом выпуска
car.engine = "1,6";
car.year = "2005";
car2.engine = "1,7";
car2.year = "2006";

//Поменяйте значение model в одном из объектов на другую марку.
car2.model = "uaz";

//Удалите свойство year из обоих объектов используя функцию удаления через this.
car.del = function(){ delete this.year; }
car2.del = car.del;
car.del();
car2.del();

//Выведите в консоль марку и объем кажюого из автомобилей используя функцию вывода, тоже через this
function getModEng(){ console.log("model: " + this.model + "\n" + "engine: " + this.engine); }
car.getModelEngine = getModEng;
car2.getModelEngine = getModEng;
car.getModelEngine();
car2.getModelEngine();