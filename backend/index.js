const server = require('./server')
const { PORT, MONGO_URI_CONNECT } = require('./config')

const mongoose = require('mongoose')

mongoose.connect(MONGO_URI_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(_ => {
      console.log('Conexión exitosa!')
      server.listen(PORT, _ => {
        console.log(`Servidor ejecutandoce en el puerto ${ PORT }`)
      })
    })
    .catch(console.error)

