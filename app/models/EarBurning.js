mongoose = require('mongoose'),
         Schema = mongoose.Schema,
         ObjectId = Schema.ObjectId;


var EarBurningSchema = new Schema({
  text: String,
  rate: Number,
  created_at: Date,
  politic: [Politic],
});

module.exports = mongoose.model('EarBurning', EarBurningSchema);
