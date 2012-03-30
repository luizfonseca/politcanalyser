// Here we have access to mongoose.

var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PagesController = new Controller();
PagesController._model = require('../models/Politic');

PagesController.main = function() {
  self = this;
  this.title = 'True';
  this.politics = "Each"
  this.render();

}

module.exports = PagesController;
