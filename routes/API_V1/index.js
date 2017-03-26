/**
 * Created by bagjeongtae on 2017. 3. 26..
 */
var express = require('express');
var router = express.Router();

var user = require('./users');
var scores = require('./scores');

router.use('/user', user);
router.use('/score', scores);

module.exports = router;