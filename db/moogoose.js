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
  all_rules: String,
  cancel_policy: String,
  more_cancel_policy: String,
  amenities: [Object]
})

var Room = mongoose.model(‘Room’, roomSchema)
var Room1 = new Room({ 
  room: Schema.Types.ObjectId,
  room_type: 'ENTIRE HOUSE',
  room_name: 'Sunny Cabin by the Lake'
  city: 'Lake Tahoe',
  guest_num: 4,
  bedroom_num: 2,
  bed_num: 4,
  bath_num: 3,
  description: '',
  more_description: String,
  house_rules: 'No smoking, Check-in is anytime after 2PM, Check out by 12PM',

  all_rules: `No Pets
  No smoking withing 100 feet of building
  Do not place items with in 6 inches from wall heaters. Can be a fire hazard. 
  Common courtesy expected from all guest. No excessive noise before 7am and after 10pm. Any concerns please call the owner and avoid calling the front desk. 
  Bear alert! Do not feed the bears.

  You must also acknowledge
  Must climb stairs`

  cancel_policy: 'Moderate policy – Free cancellation within 48 hours',

  more_cancel_policy: `Cancel up to 24 hours before check-in to get a refund, minus Airbnb service fees. Cancel within 24 hours of check-in and the first night is non-refundable.
  Airbnb service fees are refunded only if the reservation is cancelled within 48 hours of booking and the guest has not checked-in yet.`

  amenities: [{'Basic': 
                     {
                       'Wifi': 'Continuous access in the listing', 
                       'Iron': true, 
                       'laptop friendly workspace':'A table or desk with space for a laptop and a chair that’s comfortable to work in',
                       'Cable TV': true,
                       'Indoor fireplace': true,
                       'TV': true,
                       'Heating': 'Central heating',
                       'Dryer': 'In the building, free',
                       'Washer': 'In the building, free',
                       'Hot water': true,
                       'Air conditioning': false

                     }
              },
              {'Family features': 'children\'s books and toys'
              },
              {'Facilities': 
                       {'Free parking on premises': true,
                        'Gym': 'Free, in the building',
                        'Hot tub': true,
                        'pool': 'Private',
                        'Free street parking': true
                       }

              },
              {'Dining': 
                    {'Kitchen': 'Space where guests can cook their own meals'
                    }

              },
              {'Bed and bath': ['Shampoo', 'Hangers', 'Hair dryer']

              },
              {'Safety features': ['Carbon monoxide detector', 'Smoke detector']

              }
});



