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
    title: { type: String, required: true, default: 'Title', required: true },
    location : { type: String, required: true, default: 'Location', required: true },
    description: {type: Types.Html, wysiwyg: true, height: 400 },
    date: { type: Date, default: Date.now},
    image: { type: Types.CloudinaryImage }
});

Gig.defaultColumns = 'title, location, date, description, image';

Gig.register();