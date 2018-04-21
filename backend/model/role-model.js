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
        default: Date.now()
    },
    location: {
        type: String,
        default: 'Budapest'
    },
    color: {
        type: String,
        default: '#666'
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Role', RoleSchema)