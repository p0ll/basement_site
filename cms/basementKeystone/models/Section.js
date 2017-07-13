var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Player Model
 * ==========
 */

var Section = new keystone.List('Section');

Section.add({
    name: { type: String, required: true, index: true }
});




/**
 * Registration
 */

Section.defaultColumns = 'name';
Section.register();