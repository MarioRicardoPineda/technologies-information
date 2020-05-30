
if( process.env.NODE_ENV !== 'production' ) {
  require('dotenv').config()
}

module.exports = {

  PORT : process.env.PORT,
  MONGO_URI_CONNECT : process.env.MONGO_URI_CONNECT

}