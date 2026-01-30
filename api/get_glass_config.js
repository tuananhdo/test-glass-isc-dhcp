/**
 * Created by cmiles on 8/13/2018.
 */

var express = require('express');
var router = express.Router();
var authorize = require('../core/authorize.js');

router.get('/', authorize.auth, function (req, res, next) {
	var json_file = require('jsonfile');
	var glass_config = require('../core/config');

	/**
	 * Return response
	 */
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(glass_config));
});

module.exports = router;