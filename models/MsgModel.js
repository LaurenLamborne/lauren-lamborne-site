var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
 name: {required: true, type: String},
 email: {required: true, type: String},
 msg: {required: true, type: String},
 created: Date,
});

mongoose.model('Messages', MessageSchema);
