const User = require('../models/user')
const Team = require('../models/team')
const Location = require('../models/location')
const Event = require('../models/event')

const initialTeams = [
  {
    team_id: 1,
    name: 'testitiimi1',
    score: 10
  },
  {
    team_id: 2,
    name: 'testitiimi2',
    score: 5
  }
]

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

const teamsInDb = async () => {
  const teams = await Team.find({})
  return teams.map(t => t.toJSON())
}

const locationsInDb = async () => {
  const locations = await Location.find({})
  return locations.map(l => l.toJSON())
}
const eventsInDb = async () => {
  const events = await Event.find({})
  return events.map(e => e.toJSON())
}

module.exports = {
  initialTeams,
  usersInDb,
  teamsInDb,
  locationsInDb,
  eventsInDb
}