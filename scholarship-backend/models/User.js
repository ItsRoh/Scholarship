
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // Profile fields
    course: String,
    gpa: Number,
    location: String,
    incomeStatus: String,
    specialCategories: String,
});

module.exports = mongoose.model('User', userSchema);
