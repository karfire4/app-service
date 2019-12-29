const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    email_id: String,
    password: String,
    mobile_no:Number,
    confirm_password:String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', NoteSchema);