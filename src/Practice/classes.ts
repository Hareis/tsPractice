//类
/**
 * test 类
 */
class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "hello," + this.greeting;
    }
}

var greeter = new Greeter(" world");

//继承

class Animal {
    name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    move(meters: number = 0) {
        alert(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    eyes: number;

    constructor(name: string) {
        super(name);
        this.eyes = 2;
    }

    move(meter = 5) {
        alert("snake moving....");
        super.move(meter);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(meters = 45) {
        alert("horse moving...");
        super.move(meters);
    }
}

var sam = new Snake("Sammy the Python");
var tom: Animal = new Horse("Tommy the Palomino");

alert(sam.eyes);
//aa
alert(tom instanceof Animal);

// 理解private

class A1nimal {
    private name: string;

    constructor(theName: string) {
        this.name = theName;
    }
}

class Rhino extends A1nimal {
    constructor() {
        super("Rhino");
    }
}

class Employee {
    private name: string;

    constructor(theName: string) {
        this.name = theName;
    }
}
var animal = new A1nimal("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");

animal = rhino;
//animal = employee; //error: Animal and Employee are not compatible

// 参数属性

class A2nimal {
    constructor(private name: string) {

    }

    move(meters: number) {
        alert(this.name + "moved" + meters + 'm.');
    }
}

new A2nimal('tom').move(4.5);


class Greeter1 {
    static standardGreeting = "Hello, there";
    greeting: string;

    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter1.standardGreeting;
        }
    }
}

var greeter2: Greeter1;
greeter2 = new Greeter1();
alert(greeter2.greet());

var greeteeMaker: typeof Greeter1 = Greeter1;
greeteeMaker.standardGreeting = "Hey there!";

var greeter: Greeter1 = new Greeter1();
alert(greeter.greet());

//把一个类当作接口来用

class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

var point3d: Point3d = {x: 1, y: 2, z: 3};