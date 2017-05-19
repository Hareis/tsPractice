/**
 * Created by tempus on 2017/5/19.
 */
//函数

function add(x: number, y: number): number {
    return x + y;
}

var myAdd = function (x: number, y: number): number {
    return x + y;
};


var myAdd1: (x: number, y: number) => number = function (x, y): number {
    return x + y;
}

function buildName1(firstName: string, lastName?:string) {


}
function buildName2(firstName: string, lastName = "Smith") {

}

function buildName3(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");