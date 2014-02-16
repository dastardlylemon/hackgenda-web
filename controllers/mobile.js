var Schedule = require('../models/Schedule');
var Sponsor = require('../models/Sponsor');

exports.schedule = function(req, res) {
  Schedule.getSchedule(function(err, sched) {
    if (err) {
      res.json(err);
    }
    res.json(sched);
    console.log(sched);
  });
};

exports.sponsor = function(req, res) {
  Schedule.getSponsor(function(err, spsr) {
    if (err) {
      res.json(err);
    }
    res.json(spsr);
    console.log(spsr);
  });
};