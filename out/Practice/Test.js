/**
 * Created by tempus on 2017/5/19.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zip = require("./module/ZipCodeValidator");
var letters = require("./module/LettersOnlyValidator");
// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators = {};
validators['ZIP code'] = new zip.ZipCodeValidator();
validators['Letters only'] = new letters.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});
//# sourceMappingURL=Test.js.map