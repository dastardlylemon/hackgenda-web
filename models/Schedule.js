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

var Schedule = mongoose.model('Schedule', scheduleSchema);

exports.getSchedule = function(cb) {
  Schedule.find({}, function (err, sched) {
    if (err) {
      console.log(err);
      cb(err);
      return
    }
    cb(null, sched);
  });
}

exports.addEvent = function(day, evnt, cb) {
  Schedule.find({day:day}, function(err, schedule) {
    if (err) {
      schedule = new Schedule({
        day: day,
      });
    }
    schedule.events.push(evnt);
    schedule.save(function(err, sched) {
      if (err) {
        cb(err);
        console.log(err);
      }
      cb(null, sched);
    });
  });
}