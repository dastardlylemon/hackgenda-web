var Schedule = require('../models/Schedule');

exports.getChat = function(req, res) {
  res.render('chat', {
    title: 'Chat'
  });
};

exports.getSchedule = function(req, res) {
  Schedule.getSchedule(function(err, sched) {
    if (err) {
      req.flash('errors', errors);
      return req.redirect('schedule');
    }
    res.render('schedule', {
      title: 'Schedule',
      schedule: sched
    });
  });
};