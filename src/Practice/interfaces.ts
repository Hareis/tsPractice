//第一个接口

interface ILabelledValue
{
    label: string
}

function printLabel( labelObj: ILabelledValue )
{
    console.log( labelObj.label );
}

var myobj = { size: 10, label: "sdddddd" };

printLabel( myobj );

//可选属性
interface ISquareConfig
{
    color?: string,
    width?: number
}

function createSquare( config: ISquareConfig ): { color: string; area: number }
{
    var newSquare = { color: "white", area: 100 };

    if ( config.color ) {
        newSquare.color = config.color;
    }
    if ( config.width ) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

var mySquare = createSquare( { color: "black" });


//函数类型

interface ISearchFunc
{
    ( source: string, subString: string ): boolean;
}

var mySearch: ISearchFunc;
mySearch = function ( source: string, subString: string ): boolean
{
    var result = source.search( subString );
    if ( result == 1 ) {
        return false;
    } else {
        return true;
    }
}

var mySearch1: ISearchFunc;
mySearch1 = function ( src: string, sub: string )
{
    var result = src.search( sub );
    return false;
}

//数组类型

interface StringArray 
{
    [index: number]: string;

}
var myArray: StringArray;
myArray = ["a", "aa"];
var myArrayItem: string = myArray[1];


//实现一个接口

interface ClockInterface
{
    currentTime: Date;
    setTime( c: Date ): boolean;
    getTime(): Date;
}

class Clock implements ClockInterface
{
    currentTime: Date = new Date();
    constructot( a: number, b: string )
    {

    }
    setTime( c: Date )
    {
        return true;
    }
    getTime()
    {
        return this.currentTime;
    }

}

//类中的静态部分和实例部分的区别

interface ClockStatic
{
    new ( hour: number, minute: number );
}

class Clock1
{
    currentTime: Date;
    constructor( h: number, m: number ) { }
}

var cs: ClockStatic = Clock1;
var newClock = new cs( 7, 30 );

//扩展接口

interface ISharp
{
    color: string;
}
interface ISqure extends ISharp
{
    sideLength: number;
}

var square = <ISqure>{};
square.color = "blue";
square.sideLength = 10;


//混合类型（Hybrid Types）

interface Counter
{
    ( start: number ): string;
    interval: number;
    reset(): void;
}

var c: Counter;
c( 10 );
c.reset();
c.interval = 5.00;



