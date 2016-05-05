var mongoose = require('mongoose');
mongoose.set('debug', true);

var MessSchema = mongoose.Schema({
  receicer: { type: String, last: String },
  sender: { type: String, last: String },  
  messcontent: { type: String, last: String},
  salt: { type: String, required: true },
  created:{type:Date, default:Date.now}
});


mongoose.model('Mess', MessSchema);