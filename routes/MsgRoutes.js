var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var sendMail = require('./SendMail.js');
var Messages = mongoose.model('Messages');

router.post('/', function(req, res, next) {
  var messages = new Messages(req.body);
  messages.name = req.body.name;
  messages.name = req.body.email;
  messages.name = req.body.msg;
  messages.created = new Date();
  messages.save(function(err, result) {
    sendMail(req, res);
  });
});

module.exports = router;
