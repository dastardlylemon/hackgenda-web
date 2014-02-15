var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  time: { type: String },
  duration: { type: Number },
  URL: { type: String }
});

var scheduleSchema = new mongoose.Schema({
  day: { type: String, unique: true },
  events: [eventSchema]
});

module.exports = mongoose.model('Schema', scheduleSchema);