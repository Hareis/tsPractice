"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 学生实体类
 *
 * @class Student
 */
var Student = (function () {
    function Student(fiestName, lastName) {
        this.firstName = fiestName;
        this.lastName = lastName;
    }
    Student.prototype.greeter = function () {
        return "Hello，您好" + this.firstName + " " + this.lastName;
    };
    return Student;
}());
exports.Student = Student;
//# sourceMappingURL=greeter.js.map 
//# sourceMappingURL=greeter.js.map 
//# sourceMappingURL=greeter.js.map