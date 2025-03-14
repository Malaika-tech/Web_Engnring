const mongoose = require('mongoose');
const freindContactHistorySchema = new mongoose.Schema({
    contactDate: {type: Date, default: Date.now},
    contactMessage: {type: String, required: true}
});
const contactLog = mongoose.model('contactLog',freindContactHistorySchema);
module.exports = {contactLog};