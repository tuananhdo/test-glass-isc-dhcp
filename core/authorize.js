var basic_auth = require('basic-auth');

/* Read Config */
var glass_config = require('./config');

module.exports = {
	auth: function (req, res, next) {
		var user = basic_auth(req);

		function unauthorized(res) {
			res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
			return res.sendStatus(401);
		};


		if (glass_config.admin_user == "") {
			next();
			return;
		}

		if (!user || !user.name || !user.pass) {
			return unauthorized(res);
		}
		if (user.name === glass_config.admin_user && user.pass === glass_config.admin_password) {
			next();
		} else {
			return unauthorized(res);
		}
	}
};

