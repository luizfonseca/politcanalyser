var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Politic = mongoose.model('Politic', PoliticSchema);
module.exports = Politic;
