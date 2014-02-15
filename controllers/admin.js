var Schedule = require('../models/Schedule');

exports.adminUpdates = function(req, res) {
  if (req.user.isAdmin) {
    res.render('admin/adminUpdates', {
      title: 'Send Updates'
    });
  } else {
    res.redirect('home');
  }
};

exports.scheduleUpdates = function(req, res) {
  Schedule.getSchedule(err, sched, function() {
    if (err) {
      req.flash('errors', errors);
      return req.redirect('admin/scheduleUpdates');
    }
    if (req.user.isAdmin) {
      res.render('admin/scheduleUpdates', {
        title: 'Update Schedule',
        schedule: sched
      });
    } else {
      res.redirect('schedule');
    }
  });
  
};

exports.sponsorUpdates = function(req, res) {
  if (req.user.isAdmin) {
    res.render('admin/sponsorUpdates', {
      title: 'Update Sponsors'
    });
  } else {
    res.redirect('sponsors');
  }
};

exports.awardUpdates = function(req, res) {
  if (req.user.isAdmin) {
    res.render('admin/awardUpdates', {
      title: 'Update Awards'
    });
  } else {
    res.redirect('awards');
  }
};

exports.socialUpdates = function(req, res) {
  if (req.user.isAdmin) {
    res.render('admin/socialUpdates', {
      title: 'Update Social Media'
    });
  }
};