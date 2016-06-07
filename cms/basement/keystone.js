// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Require keystone
var keystone = require('keystone');
var handlebars = require('express-handlebars');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'Basement Orchestra',
	'brand': 'Basement Orchestra',
	
	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'hbs',
	
	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs'
	}).engine,
	
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'Player'

});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

keystone.set('cloudinary config', { cloud_name: 'dfy6lmw7j', api_key: '223664585877129', api_secret: 'qWfr3J78W6eacJhtk74HNXT90pE' });
// or
keystone.set('cloudinary config', 'CLOUDINARY_URL=cloudinary://223664585877129:qWfr3J78W6eacJhtk74HNXT90pE@dfy6lmw7j' );
 
// optional, will prefix all built-in tags with 'keystone_'
keystone.set('cloudinary prefix', 'keystone');
 
// optional, will prefix each image public_id with [{prefix}]/{list.path}/{field.path}/
keystone.set('cloudinary folders', true);
 
// optional, will force cloudinary to serve images over https
keystone.set('cloudinary secure', true);

// Load your project's Routes

keystone.set('routes', require('./routes'));

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'posts': ['posts', 'post-categories'],
	'players': 'players', 
	'gigs' : 'gigs'
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
