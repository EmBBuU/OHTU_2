const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const helper = require('./test_helper')
const Team = require('../models/team')

beforeEach(async () => {
    await Team.deleteMany({})
    await Team.insertMany(helper.initialTeams)
})

test('teams are returned as json', async () => {
    await api
        .get('/api/teams')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('all teams are returned', async () => {
    const response = await api.get('/api/teams')

    expect(response.body).toHaveLength(helper.initialTeams.length)
})

test('a specific team is within the returned teams', async () => {
    const response = await api.get('/api/teams')

    const names = response.body.map(r => r.name)

    expect(names).toContain(
        'testitiimi2'
    )
})

test('a valid team can be added ', async () => {
    const newTeam = {
        team_id: 3,
        name: 'lisattytiimi',
        score: 2
    }

    await api
        .post('/api/teams')
        .send(newTeam)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const teamsAtEnd = await helper.teamsInDb()
    expect(teamsAtEnd).toHaveLength(helper.initialTeams.length + 1)

    const names = teamsAtEnd.map(n => n.name)
    expect(names).toContain(
        'lisattytiimi'
    )
})

test('a team without name is not added', async () => {
    const newTeam = {
        score: 9
    }

    await api
        .post('/api/teams')
        .send(newTeam)
        .expect(400)

    const teamsAtEnd = await helper.teamsInDb()

    expect(teamsAtEnd).toHaveLength(helper.initialTeams.length)
})

test('a specific team can be viewed', async () => {
    const teamsAtStart = await helper.teamsInDb()

    const teamToView = teamsAtStart[0]

    const resultTeam = await api
        .get(`/api/teams/${teamToView.id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    //const processedNoteToView = JSON.parse(JSON.stringify(noteToView))

    expect(resultTeam.body).toEqual(teamToView)
})

test('a team can be deleted', async () => {
    const teamsAtStart = await helper.teamsInDb()
    const teamToDelete = teamsAtStart[0]

    await api
        .delete(`/api/teams/${teamToDelete.id}`)
        .expect(204)

    const teamsAtEnd = await helper.teamsInDb()

    expect(teamsAtEnd).toHaveLength(
        helper.initialTeams.length - 1
    )

    const names = teamsAtEnd.map(r => r.name)

    expect(names).not.toContain(teamToDelete.name)
})

afterAll(async () => {
    await mongoose.connection.close()
})