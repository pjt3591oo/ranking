/**
 * Created by bagjeongtae on 2017. 3. 26..
 */
var express = require('express');
var router = express.Router();

const {user, userScore} = require('../../models');

/* GET home page. */
router.get('/', function(req, res, next) {
      res.end('admin api');
});

module.exports = router;
