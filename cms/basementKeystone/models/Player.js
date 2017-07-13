var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Player Model
 * ==========
 */

var Player = new keystone.List('Player');

Player.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
    instrument:{ type: String, index: true, initial: true },
    sections: { type: Types.Relationship, ref: 'Section',  many: true },
    image: { type: Types.CloudinaryImage,  index: true}
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true }
});

// Provide access to Keystone
Player.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});



/**
 * Relationships
 */

Player.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */

Player.defaultColumns = 'name, email, isAdmin, instrument, image, category';
Player.register();
