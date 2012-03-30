var express = require('express');

module.exports = function() {
  this.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

mongoose.connect('mongodb://localhost:27017/testing_db');
