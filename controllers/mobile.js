var Schedule = require('../models/Schedule');
var Sponsor = require('../models/Sponsor');
var Push = require('../models/Push');

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
  Sponsor.getSponsor(function(err, spsr) {
    if (err) {
      res.json(err);
    }
    res.json(spsr);
    console.log(spsr);
  });
};

exports.android = function(req, res) {
  Push.addAndroidSponsor(req.body.id, function(err, and) {
    if (err) {
      res.json(err);
    }
    res.json(and);
    console.log(and);
  });
}