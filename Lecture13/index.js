const mongoose = require('mongoose');
const Friend = require('./Model/friend'); // Make sure filename matches exactly

mongoose.connect('mongodb://localhost:27017/myFriends')
    .then(() => console.log('Database is connected'))
    .catch((err) => console.log(err));

// Corrected function placement and try-catch usage
async function recordFriendDocument() {
    try {
        const frnd = new Friend({  // Use Friend model (capitalized for convention)
            name: 'Milli',
            email: 'milli26@gmail.com'
        });
        await frnd.save();
        console.log('Friend added');
    } catch (error) {
        console.log('Error adding friend:', error.message); // Show actual error message
    }
}

// Correct function call placement
recordFriendDocument();
