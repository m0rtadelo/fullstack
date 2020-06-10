var mongoose = require('mongoose');
mongoose.connect('mongodb://user:password@localhost/fullstack', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected!')
});

export default mongoose