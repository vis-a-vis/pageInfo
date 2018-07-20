var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('now connected');
});


var Schema = mongoose.Schema;

var roomSchema = new Schema ({
  room: Schema.Types.ObjectId,
  category: String,
  room_name: String,
  city: String,
  guest_num: Number,
  bedroom_num: Number,
  bed_num: Number,
  bath_num: Number,
  description: String,
  more_description: String,
  house_rules: String,
  cancel_policy: String,
  more_cancel_policy: String,
  amenities: [Object]
})

var Room = mongoose.model(‘Room’, roomSchema)

