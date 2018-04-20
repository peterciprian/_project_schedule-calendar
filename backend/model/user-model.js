const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Role = require('./role-model');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    }]
}, {
    timestamps: true
})

UserSchema.plugin(passportLocalMongoose, {
    maxAttempts: 5
});
module.exports = mongoose.model('User', UserSchema);