/**
 * Created by tempus on 2017/5/19.
 */

import StringValidator from './Validation';

var lettersRegexp = /^[A-Za-z]+$/;
export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}