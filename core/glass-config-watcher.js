var fs = require('fs');
var json_file = require('jsonfile');

module.exports = {
	init: function () {
		console.log("[Glass Server] Config watcher initialized");

		if (fs.existsSync('config/glass_config.json')) {
			fs.watch('config/glass_config.json', function (event, filename) {
				if (filename) {
					fsTimeout = setTimeout(function () {
						try {
							glass_config = json_file.readFileSync('config/glass_config.json');
							console.log("[Glass Server] Config Loaded");
						} catch (e) {
							console.log("[Glass Server] Config reload failed");
						}
					}, 1000);
				}
			});
		} else {
			console.log("[Glass Server] Config file not found, skipping watcher.");
		}
	},
};