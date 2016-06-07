/**
 * This script automatically creates a default Admin user when an
 * empty database is used for the first time. You can use this
 * technique to insert data into any List you have defined.
 * 
 * Alternatively, you can export a custom function for the update:
 * module.exports = function(done) { ... }
 */

exports.create = {
	Player: [
		{ 'name.first': 'Sara', 'name.last': 'Gozalo', email: 'sara89sgm@gmail.com', password: 'sarasgm', isAdmin: true }
	], 
	Section: [
		{'name' : 'woodwind'},
		{'name' : 'brass'},
		{'name' : 'upperstrings'},
		{'name' : 'lowerstrings'},
		{'name' : 'percussion'},
		{'name' : 'team'}
	], 
	Gig: [
		{'location' : 'Rough Trade Records', 
		'title' :'Book Slam Annual Vol II: The Launch',
		'description' : 'We joined Jesse Armstrong, Peter Serafinowicz, Salena Godden and a Rough Trade-ful of lovely book-lovers for the launch of Book Slams second annual of exclusive short storiesToo Much Too Young'
		},
		{'location' : 'The Round Chapel, Hackney', 
		'title' :'Feast',
		'description' : 'We hung out with Will Self, Andrew Maxwell and a magical chihuahua for a bit, then we treated an audience feasting on gorgeous food to some equally gorgeous music.'
		},
		{'location' : 'G.O.O.D. Inc H.Q.', 
		'title' :'Secret Cinema presents... Brazil',
		'description' : 'Secret Cinema invited its audience to join the ranks of G.O.O.D. Inc employees and explore a 13-storey recreation of Terry Gilliams satirical dystopia. Basement Orchestra provided unseasonal festive cheer, energy to corporate wellbeing sessions and a moment of sadness. We made the Croydon Guardian.'
		}
	]
};

/*

// This is the long-hand version of the functionality above:

var keystone = require('keystone'),
	async = require('async'),
	User = keystone.list('User');

var admins = [
	{ email: 'user@keystonejs.com', password: 'admin', name: { first: 'Admin', last: 'User' } }
];

function createAdmin(admin, done) {
	
	var newAdmin = new User.model(admin);
	
	newAdmin.isAdmin = true;
	newAdmin.save(function(err) {
		if (err) {
			console.error("Error adding admin " + admin.email + " to the database:");
			console.error(err);
		} else {
			console.log("Added admin " + admin.email + " to the database.");
		}
		done(err);
	});
	
}

exports = module.exports = function(done) {
	async.forEach(admins, createAdmin, done);
};

*/
