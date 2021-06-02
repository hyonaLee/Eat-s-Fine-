//production(배포 한 후)

module.exports = {
  mongoURI : process.env.MONGO_URI  //  MONGO_URI는  heroku - Settings - config vars - KEY
}