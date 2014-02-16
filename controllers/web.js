var Schedule = require('../models/Schedule');
var FirebaseTokenGenerator = require("firebase-token-generator");

exports.getChat = function(req, res) {
  if (req.user == null) {
    req.flash('errors', { msg: 'Please sign in first.' });
    res.redirect('/login');
  }
  var tokenGenerator = new FirebaseTokenGenerator(process.env.FIREBASE_SECRET);
  if (req.user.facebook) {
    var id = req.user.facebook;
    var token = tokenGenerator.createToken({id: id});
  } else if (req.user.twitter) {
    var id = req.user.twitter;
    var token = tokenGenerator.createToken({id: id});
  } else {
    req.flash('errors', { msg: 'Please sign in with Twitter or Facebook.' });
    res.redirect('/login');
  }
  res.render('chat', {
    title: 'Chat',
    token: token,
    user: req.user,
    id: id
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