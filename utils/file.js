/**
 * Created by bagjeongtae on 2017. 3. 26..
 */

var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

module.exports = multer({storage});