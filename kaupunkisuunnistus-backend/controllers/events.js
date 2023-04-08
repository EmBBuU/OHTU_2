/**
 * Main author: Jussi Kukkonen
 * Delete all-method: Julia Juntunen
 */

const eventsRouter = require('express').Router();
const Event = require('../models/event');

eventsRouter.get('/', async (request, response) => {
    const events = await Event.find({})

    console.log('List of events: ', events)
    response.json(events);
})

eventsRouter.get('/:id', async (request, response) => {
    const event = await Event.findById(request.params.id)

    if (event) {
        console.log(event)
        response.json(event)
    }
    else {
        response.status(201).json(savedEvent)
    }
})

eventsRouter.post('/', async (request, response) => {
    const body = request.body

    if (body.eventName === undefined) {
        return response.status(400).json({ error: 'event name missing' })
    }

    const event = new Event({
        eventName: body.eventName,
        eventPlaces: body.eventPlaces,
        eventTeams: body.eventTeams,
        mapsLink: body.mapsLink || "0",
        eventInfoText: body.eventInfoText
    })

    const savedEvent = await event.save()
    response.json(savedEvent)
});

eventsRouter.delete("/:id", async (request, response) => {
    await Event.findByIdAndRemove(request.params.id)
    response.status(204).end()
});

eventsRouter.delete("/", async (request, response) => {
    await Event.deleteMany({})
    response.status(200).end()
})

eventsRouter.put('/:id', (request, response, next) => {
    const body = request.body

    const event = {
        eventName: body.name,
        eventPlaces: body.eventPlaces,
        eventTeams: body.eventTeams,
        mapsLink: body.mapsLink || "0",
        eventInfoText: body.eventInfoText
    }

    Event.findByIdAndUpdate(request.params.id, event, { new: true })
        .then(updatedEvent => {
            response.json(updatedEvent)
        })
        .catch(error => next(error))
})

module.exports = eventsRouter