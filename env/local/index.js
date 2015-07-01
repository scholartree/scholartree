'use strict';

var fs = require('fs');

module.exports = {
	env: process.env.NODE_ENV || 'local',
	session_secret: process.env.SESSION_SECRET || 'This is our session secret and my gosh aint it great?',
	domain: process.env.DOMAIN || 'localhost',
	http: {
		port: process.env.HTTP_PORT || 1111
	},
	https: {
		port: process.env.HTTPS_PORT || 2222,
		private_key: fs.readFileSync(__dirname + '/ssl/localhost.key', 'utf-8'),
		public_cert: fs.readFileSync(__dirname + '/ssl/localhost.cert', 'utf-8')
	},
	mongo: {
		uri: process.env.MONGO_URI || 'mongodb://localhost/scholartree'
	}
};
