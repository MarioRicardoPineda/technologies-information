const server = require('./server')
const { PORT } = require('./config')

server.listen(PORT, _ => console.log(`Servidor ejecutandoce en el puerto ${ PORT }`))