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
        mapsLink: body.mapsLink || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.23759955423!2d29.741962116427313!3d62.597993182919375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469b8687258b9dc7%3A0xbf7037be7c052a42!2sJoensuun%20Tiedepuisto!5e0!3m2!1sfi!2sfi!4v1680704961782!5m2!1sfi!2sfi",
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