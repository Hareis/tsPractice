/**
 * Created by tempus on 2017/5/19.
 */
import StringValidator from './Validation';

var numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}