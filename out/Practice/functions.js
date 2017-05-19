/**
 * Created by tempus on 2017/5/19.
 */
//函数
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
var myAdd1 = function (x, y) {
    return x + y;
};
function buildName1(firstName, lastName) {
}
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
}
function buildName3(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");
//# sourceMappingURL=functions.js.map