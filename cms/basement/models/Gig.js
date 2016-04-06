var keystone = require('keystone'),
    Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gig= new keystone.List('Gig', {
    autokey: { from: 'title', path: 'key', unique: true }
});

Gig.add({
    title: { type: String, required: true, default: 'Title' },
    profileName : { type: String, required: true, default: 'ProfileName' },
    description: {type: Types.Html, wysiwyg: true, height: 400 },
    date: { type: Date, default: Date.now },
    image: { type: Types.CloudinaryImage }
});

Gig.defaultColumns = 'title, profileName, date, description, image';

Gig.register();