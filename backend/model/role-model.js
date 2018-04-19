const mongoose = require('mongoose')

const RoleSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    time: {
        type: Date,
        required: false,
        default: Date.now
    },
    location: {
        type: String,
        required: false,
        default: 'Budapest'
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Role', RoleSchema)