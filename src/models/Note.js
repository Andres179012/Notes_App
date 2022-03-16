const mongosee = require ('mongoose');

const {Schema} = mongosee;

const NoteSchemas = new Schema ({
    title: {type: String, required:true},
    description : {type: String, required:true},
    date: {type: Date, default: Date.now}
});

module.exports = mongosee.model('Note', NoteSchemas)