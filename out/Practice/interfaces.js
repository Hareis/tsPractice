//第一个接口
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myobj = { size: 10, label: "sdddddd" };
printLabel(myobj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result == 1) {
        return false;
    }
    else {
        return true;
    }
};
var mySearch1;
mySearch1 = function (src, sub) {
    var result = src.search(sub);
    return false;
};
var myArray;
myArray = ["a", "aa"];
var myArrayItem = myArray[1];
var Clock = (function () {
    function Clock() {
        this.currentTime = new Date();
    }
    Clock.prototype.constructot = function (a, b) {
    };
    Clock.prototype.setTime = function (c) {
        return true;
    };
    Clock.prototype.getTime = function () {
        return this.currentTime;
    };
    return Clock;
}());
var Clock1 = (function () {
    function Clock1(h, m) {
    }
    return Clock1;
}());
var cs = Clock1;
var newClock = new cs(7, 30);
var square = {};
square.color = "blue";
square.sideLength = 10;
var c;
c(10);
c.reset();
c.interval = 5.00;
//# sourceMappingURL=interfaces.js.map