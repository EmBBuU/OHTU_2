/**
 * Main authors: Sera Ilvan & Julia Juntunen
 */

const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const helper = require('./test_helper')
const Event = require('../models/event')

beforeEach(async () => {
    await Event.deleteMany({})
    await Event.insertMany(helper.initialEvents)
})

test('events are returned as json', async () => {
    await api
        .get('/api/events')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('all events are returned', async () => {
    const response = await api.get('/api/events')

    expect(response.body).toHaveLength(helper.initialEvents.length)
})

test('a specific event is within the returned events', async () => {
    const response = await api.get('/api/events')

    const names = response.body.map(r => r.eventName)

    expect(names).toContain(
        "Parastapahtuma"
    )
})

test('a valid event can be added ', async () => {
    const newEvent = {
        eventName: 'Uusitapahtuma',
        eventPlaces: 4,
        eventTeams: 5,
        mapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.23759955423!2d29.741962116427313!3d62.597993182919375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469b8687258b9dc7%3A0xbf7037be7c052a42!2sJoensuun%20Tiedepuisto!5e0!3m2!1sfi!2sfi!4v1680704961782!5m2!1sfi!2sfi',
        eventInfoText: 'Tässä uutta tekstiä infosivulle'
    }

    await api
        .post('/api/events')
        .send(newEvent)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const eventsAtEnd = await helper.eventsInDb()
    expect(eventsAtEnd).toHaveLength(helper.initialEvents.length + 1)

    const names = eventsAtEnd.map(n => n.eventName)
    expect(names).toContain(
        'Uusitapahtuma'
    )
})

test('an event without eventName is not added', async () => {
    const newEvent = {
        eventPlaces: 4,
        eventTeams: 5,
        mapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.23759955423!2d29.741962116427313!3d62.597993182919375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469b8687258b9dc7%3A0xbf7037be7c052a42!2sJoensuun%20Tiedepuisto!5e0!3m2!1sfi!2sfi!4v1680704961782!5m2!1sfi!2sfi',
        eventInfoText: 'Tässä vielä uutta tekstiä infosivulle'
    }

    await api
        .post('/api/events')
        .send(newEvent)
        .expect(400)

    const eventsAtEnd = await helper.eventsInDb()

    expect(eventsAtEnd).toHaveLength(helper.initialEvents.length)
})

test('a specific event can be viewed', async () => {
    const eventsAtStart = await helper.eventsInDb()

    const eventToView = eventsAtStart[0]

    const resultEvent = await api
        .get(`/api/events/${eventToView._id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)


    expect(resultEvent.body).toEqual(eventToView)
})

test('an event can be deleted', async () => {
    const eventsAtStart = await helper.eventsInDb()
    const eventToDelete = eventsAtStart[0]

    await api
        .delete(`/api/events/${eventToDelete._id}`)
        .expect(204)

    const eventsAtEnd = await helper.eventsInDb()

    expect(eventsAtEnd).toHaveLength(
        helper.initialEvents.length - 1
    )

    const names = eventsAtEnd.map(r => r.eventName)

    expect(names).not.toContain(eventToDelete.eventName)
})

afterAll(async () => {
    await mongoose.connection.close()
})