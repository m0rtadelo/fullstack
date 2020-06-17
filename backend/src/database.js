var mongoose = require('mongoose')
const options = { useNewUrlParser: true, useUnifiedTopology: true, bufferCommands: false }
mongoose.connect(`mongodb://user:password@${process.env.DB_HOST || 'localhost'}:27017/fullstack`, options).catch((error) => {
  console.error(error)
})
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('connected!')
})

export default mongoose
