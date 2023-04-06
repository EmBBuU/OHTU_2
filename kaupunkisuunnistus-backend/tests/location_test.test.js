/**
 * Main authors: Sera Ilvan & Julia Juntunen
 */

const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const helper = require('./test_helper')
const Location = require('../models/location')

beforeEach(async () => {
    await Location.deleteMany({})
    await Location.insertMany(helper.initialLocations)
})

test('locations are returned as json', async () => {
    await api
        .get('/api/locations')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('all locations are returned', async () => {
    const response = await api.get('/api/locations')

    expect(response.body).toHaveLength(helper.initialLocations.length)
})

test('a specific location is within the returned locations', async () => {
    const response = await api.get('/api/locations')

    const names = response.body.map(r => r.name)

    expect(names).toContain(
        'cuulipaikka'
    )
})

test('a valid location can be added ', async () => {
    const newLocation = {
        name: 'newlocation'
    }

    await api
        .post('/api/locations')
        .send(newLocation)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const locationsAtEnd = await helper.locationsInDb()
    expect(locationsAtEnd).toHaveLength(helper.initialLocations.length + 1)

    const names = locationsAtEnd.map(n => n.name)
    expect(names).toContain(
        'newlocation'
    )
})

test('a location without a name is not added', async () => {
    const newLocation = {
    }

    await api
        .post('/api/locations')
        .send(newLocation)
        .expect(400)

    const locationsAtEnd = await helper.locationsInDb()

    expect(locationsAtEnd).toHaveLength(helper.initialLocations.length)
})

test('a specific location can be viewed', async () => {
    const locationsAtStart = await helper.locationsInDb()

    const locationToView = locationsAtStart[0]

    const resultLocation = await api
        .get(`/api/locations/${locationToView._id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)


    expect(resultLocation.body).toEqual(locationToView)
})

test('a location can be deleted', async () => {
    const locationsAtStart = await helper.locationsInDb()
    const locationToDelete = locationsAtStart[0]

    await api
        .delete(`/api/locations/${locationToDelete._id}`)
        .expect(204)

    const locationsAtEnd = await helper.locationsInDb()

    expect(locationsAtEnd).toHaveLength(
        helper.initialLocations.length - 1
    )

    const names = locationsAtEnd.map(r => r.name)

    expect(names).not.toContain(locationToDelete.name)
})

afterAll(async () => {
    await mongoose.connection.close()
})