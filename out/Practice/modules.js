/**
 * Created by tempus on 2017/5/19.
 */
var lettersRegexp = /^[A-Za-z]+$/;
var numberRegexp = /^[0-9]+$/;
var LettersOnlyValidator = (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidator;
}());
var ZipCodeValidator = (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators = {}; // key 为string item 为继承StringValidator
validators['ZIP code'] = new ZipCodeValidator();
validators['Letters only'] = new LettersOnlyValidator();
if (typeof (validators['ZIP code']) == typeof (validators['Letters only'])) {
    // Show whether each string passed each validator
    strings.forEach(function (s) {
        for (var name in validators) {
            console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
        }
    });
}
//# sourceMappingURL=modules.js.map