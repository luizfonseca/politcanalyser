var express = require('express');

module.exports = function() {
  this.set('views', __dirname + '/../../app/views');
  this.set('models', __dirname + '/../../app/models');
  this.set('view engine', 'ejs');
  this.use(express.logger());
  this.use(express.bodyParser());
  this.use(this.router);
  this.use(express.static(__dirname + '/../../public'));
  this.datastore(require('locomotive-mongoose'));
}

mongoose = require('mongoose');
