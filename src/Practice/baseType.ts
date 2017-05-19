
var isDone:boolean=false;

var doneStr:string="";

var age:number=19;

var list:number[]=[1,2,3];
var list:Array<number>=[1,23,3];

enum color{
    red,
    blue,
    green
}
var a:color=color.blue;

enum Color {Red = 1, Green = 2, Blue = 4};
var b: Color = Color.Green;

var notSure:any=4;
notSure="this is str";
notSure=false;


var list1:any[]=[1,2,false,"ssss"];
list[1]=100;


function warnUser(): void {
    alert("This is my warning message");
}