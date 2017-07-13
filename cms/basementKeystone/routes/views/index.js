var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	//locals.section = 'home';
	
	// Load the gigs by date
	view.query('gigs', keystone.list('Gig').model.find().sort('-date'));

	view.query('players', keystone.list('Player').model.find().sort('name').populate('sections'));
	// Render the view
	view.render('index');
	
};
