const locationsRouter = require('express').Router()
const Location = require('../models/location')

locationsRouter.get('/', async (request, response) => {
  const locations = await Location.find({})

  console.log('List of locations: ', locations)
  response.json(locations)
})

locationsRouter.get('/:id', async (request, response) => {
  const location = await Location.findById(request.params.id)
  
  if (location) {
    console.log(location)
    response.json(location)
  }
  else {
    response.status(201).json(savedLocation)
  }
});

locationsRouter.post('/', async (request, response, next) => {
  const body = request.body

  if (body.name === undefined) {
    return response.status(400).json({ error: 'location name missing' })
  }

  const location = new Location({
    // location_id automatisoitu incrementti tähän?
    name: body.name
  })

  const savedLocation = await location.save()
  response.json(savedLocation)
});

locationsRouter.delete('/:id', async (request, response) => {
  await Location.findByIdAndRemove(request.params.id)
  response.status(204).end()
});

// Ei testattu
locationsRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const location = {
    name: body.name
  }

  Location.findByIdAndUpdate(request.params.id, location, { new: true })
    .then(updatedLocation => {
      response.json(updatedLocation)
    })
    .catch(error => next(error))
})


module.exports = locationsRouter