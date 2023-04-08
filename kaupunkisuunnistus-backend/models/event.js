const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    eventPlaces: {
        type: Number,
        required: true
    },
    eventTeams: {
        type: Number,
        required: true
    },
    mapsLink: String,
    eventInfoText: {
        type: String,
        required: true
    }
})

eventSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject._id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Event', eventSchema)