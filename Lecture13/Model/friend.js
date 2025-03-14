const mongoose = require('mongoose'); // Fixed typo in 'mongoose'
const validator = require('validator');

const myFriendProfile = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 20 },
    email: { 
        type: String, 
        unique: true, 
        required: true, 
        validate: [validator.isEmail, 'Invalid email format']
    }
});

const Friend = mongoose.model('Friend', myFriendProfile);
module.exports = Friend; // Ensure correct export
