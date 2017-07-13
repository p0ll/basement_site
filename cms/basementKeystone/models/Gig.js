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
    title: { type: String, required: true, default: 'Title', required: true, initial: true, },
    location : { type: String, required: true, default: 'Location', required: true, initial: true,},
    description: {type: Types.Html, wysiwyg: true, height: 400, initial: true, },
    dategig: { type: Date, initial: true},
    image: { type: Types.CloudinaryImage}
});

Gig.defaultColumns = 'title, location, dategig, description, image';

Gig.register();