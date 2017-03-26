/**
 * Created by bagjeongtae on 2017. 3. 26..
 */
var express = require('express');
var router = express.Router();

var user = require('./users');
var scores = require('./scores');
var files = require('./files');

router.use('/user', user);
router.use('/score', scores);
router.use('/file', files);

module.exports = router;