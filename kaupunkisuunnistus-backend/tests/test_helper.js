const User = require('../models/user')
const Team = require('../models/team')
const Location = require('../models/location')
const Event = require('../models/event')

const initialTeams = [
  {
    name: 'testitiimi2',
    score: 5
  }
]

const initialLocations = [
  {
    name: 'cuulipaikka'
  }
]

const initialEvents = [
  {
    eventName: 'Parastapahtuma',
    eventPlaces: 3,
    eventTeams: 5,
    mapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.23759955423!2d29.741962116427313!3d62.597993182919375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469b8687258b9dc7%3A0xbf7037be7c052a42!2sJoensuun%20Tiedepuisto!5e0!3m2!1sfi!2sfi!4v1680704961782!5m2!1sfi!2sfi',
    eventInfoText: 'Tässä tekstiä infosivulle'
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
  initialEvents,
  initialLocations,
  usersInDb,
  teamsInDb,
  locationsInDb,
  eventsInDb
}