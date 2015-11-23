var GeneralCarOptions = {
    doors: "4 doors",
    wheels:  "4 wheels",
    windows: "6 windows"
};
function CarCreator(model, body_type, abs, alarm) {
    this.model = model;
    this.body_type = body_type;
    this.abs = abs;
    this.alarm = alarm;
}
CarCreator.prototype = GeneralCarOptions;

var car1 = new CarCreator("bmw","sedan","no","yes");
var car2 = new CarCreator("mercedes", "coupe", "yes", "yes");
var car3 = new CarCreator("wv","hatchback","no","no");

console.log(car1);
console.log(car2);
console.log(car3);


