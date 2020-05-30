const express = require('express')
const server = express()
const cors = require('cors')
const { Technology } = require('../models')

// Middleware's
server.use(express.json())
server.use(express.static(__dirname + '/../public'))
server.use(cors())

// Rutas 

server.get('/api/technologies', async ( req, res ) => {

  let technologies = await Technology.find()
  // Se hace un map para poder concatener la ruta de la imagen (logo), 
  // de caso contrario, el servidor no sabria encontrarla
  technologies = technologies.map( technology => {
    technology.logo = `${ req.protocol }://${ req.headers.host }/img/${ technology.logo }`

    return technology
  } )

  return res.send({ error: false, data: technologies })
} )

server.get('/api/technology/:id', async ( req, res ) => {
  const { id } = req.params

  let technology = await Technology.findById( id )
  // Se hace un map para poder concatener la ruta de la imagen (logo), 
  // de caso contrario, el servidor no sabria encontrarla
  technology.logo = `${ req.protocol }://${ req.headers.host }/img/${ technology.logo }`

  return res.send({ error: false, data: technology })
} )


server.get('/api/technologies/search/:name', async ( req, res ) => {

  const { name } = req.params

  let technologies = await Technology.find({
    name: { $regex: new RegExp(name, 'i') } 
  })

  // Se hace un map para poder concatener la ruta de la imagen (logo), 
  // de caso contrario, el servidor no sabria encontrarla
  
  technologies = technologies.map( technology => {
    technology.logo = `${ req.protocol }://${ req.headers.host }/img/${ technology.logo }`

    return technology
  } )

  return res.send({ error: false, data: technologies })
} )

module.exports = server
