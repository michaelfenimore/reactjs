const path = require('path');

module.exports = {
	context: path.resolve(__dirname),
	entry: "./source/script.js",
	output: {
		path: __dirname + "/js",
		filename: 'script.min.js'
	}
};