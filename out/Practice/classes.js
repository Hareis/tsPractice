var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//��
/**
 * test ��
 */
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "hello," + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter(" world");
//�̳�
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        alert(this.name + " moved " + meters + "m.");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        var _this = _super.call(this, name) || this;
        _this.eyes = 2;
        return _this;
    }
    Snake.prototype.move = function (meter) {
        if (meter === void 0) { meter = 5; }
        alert("snake moving....");
        _super.prototype.move.call(this, meter);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (meters) {
        if (meters === void 0) { meters = 45; }
        alert("horse moving...");
        _super.prototype.move.call(this, meters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
alert(sam.eyes);
//aa
alert(tom instanceof Animal);
// ����private
var A1nimal = (function () {
    function A1nimal(theName) {
        this.name = theName;
    }
    return A1nimal;
}());
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(A1nimal));
var Employee = (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new A1nimal("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
animal = rhino;
//animal = employee; //error: Animal and Employee are not compatible
// ��������
var A2nimal = (function () {
    function A2nimal(name) {
        this.name = name;
    }
    A2nimal.prototype.move = function (meters) {
        alert(this.name + "moved" + meters + 'm.');
    };
    return A2nimal;
}());
new A2nimal('tom').move(4.5);
var Greeter1 = (function () {
    function Greeter1() {
    }
    Greeter1.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter1.standardGreeting;
        }
    };
    return Greeter1;
}());
Greeter1.standardGreeting = "Hello, there";
var greeter2;
greeter2 = new Greeter1();
alert(greeter2.greet());
var greeteeMaker = Greeter1;
greeteeMaker.standardGreeting = "Hey there!";
var greeter = new Greeter1();
alert(greeter.greet());
//��һ���൱���ӿ�����
var Point = (function () {
    function Point() {
    }
    return Point;
}());
var point3d = { x: 1, y: 2, z: 3 };
//# sourceMappingURL=classes.js.map