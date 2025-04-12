const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
        unique: false, // different providers might not give email
    },
    password: {
        type: String,
        required: false, // only for local login
    },
    provider: {
        type: String,
        required: true, // e.g. 'google', 'facebook', 'github', 'local'
    },
    providerId: {
        type: String,
        required: true // the unique ID given by Google/Facebook/etc.
    },
    profilePhoto: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
