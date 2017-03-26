/**
 * Created by bagjeongtae on 2017. 3. 26..
 */
var crypto = require('crypto');
var shasum = crypto.createHash('md5');

module.exports = function(str, cb){
    shasum.update('이 문자열이 해싱됩니다.');
    cb(shasum.digest('hex'));
}