/**
 * Created by bagjeongtae on 2017. 3. 26..
 */
var express = require('express');
var router = express.Router();

const dashboard = require('./dashboard');

router.use('/dashboard', dashboard);


module.exports = router;