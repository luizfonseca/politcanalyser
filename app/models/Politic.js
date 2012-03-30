mongoose = require('mongoose'),
         Schema = mongoose.Schema,
         ObjectId = Schema.ObjectId;


var PoliticSchema = new Schema({
  name: { type: Array },
  party: { type: String },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Politic', PoliticSchema);
