var Schedule = require('../models/Schedule');

exports.schedule = function(req, res) {
  Schedule.getSchedule(function(err, sched) {
    if (err) {
      res.json(err);
    }
    res.json(sched);
    console.log(sched);
  });
};