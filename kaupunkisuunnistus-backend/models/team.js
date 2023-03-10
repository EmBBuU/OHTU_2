const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
  team_id: Number,
  name: {
    type: String,
    required: true
  },
  score: Number
})

teamSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject._id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Team', teamSchema)