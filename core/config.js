var json_file = require('jsonfile');
var path = require('path');

var config_path = path.join(__dirname, '../config/glass_config.json');
var example_config_path = path.join(__dirname, '../config/glass_config.example.json');

var glass_config;

try {
    glass_config = json_file.readFileSync(config_path);
} catch (e) {
    console.log("[Glass Server] Warning: config/glass_config.json not found. Loading example config.");
    try {
        glass_config = json_file.readFileSync(example_config_path);
    } catch (e2) {
        console.error("[Glass Server] Critical Error: Could not load configuration or example configuration.");
        process.exit(1);
    }
}

module.exports = glass_config;
