var locomotive = require('locomotive')
  , Controller = locomotive.Controller;
var PoliticsController = new Controller();

PoliticsController._model = require('../models/Politic');

PoliticsController._mayors = {
  "DEM":  ["Rodrigo Maia"],
  "PSOL": ["Marcelo Freixo"],
  "PSDB": ["Otávio Leite", "Otavio Leite"],
  "PMDB": ["Eduardo Paes"]
}



PoliticsController.index = function(){

    this.something = "some"
    this.render();
}


module.exports = PoliticsController;
