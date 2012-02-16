var locomotive = require('locomotive')
  , Controller = locomotive.Controller;
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;
mongoose.connect('mongodb://localhost:27017/testing_db');


var PagesController = new Controller();

var PoliticSchema = new Schema({
  name: String,
  hashtag: String,
  created_at: Date,
});


var Politic = mongoose.model('Politic', PoliticSchema);

PagesController.main = function() {
  this.title = 'Locomotive';
  this._politic = new Politic();
  this._politic.name = "Test name";
  this._politic.save();
  this.politics = this._politic.name;
  this.render();
}

module.exports = PagesController;
