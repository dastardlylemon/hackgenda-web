var Schedule = require('../models/Schedule');

exports.adminUpdates = function(req, res) {
  if (user.isAdmin) {
    res.render('admin/adminUpdates', {
      title: 'Send Updates'
    });
  } else {
    res.redirect('home');
  }
};

exports.scheduleUpdates = function(req, res) {
  if (local.user.isAdmin) {
    res.render('admin/scheduleUpdates', {
      title: 'Update Schedule'
    });
  } else {
    res.redirect('schedule');
  }
};

exports.sponsorUpdates = function(req, res) {
  if (user.isAdmin) {
    res.render('admin/sponsorUpdates', {
      title: 'Update Sponsors'
    });
  } else {
    res.redirect('sponsors');
  }
};

exports.awardUpdates = function(req, res) {
  if (user.isAdmin) {
    res.render('admin/awardUpdates', {
      title: 'Update Awards'
    });
  } else {
    res.redirect('awards');
  }
};

exports.socialUpdates = function(req, res) {
  if (user.isAdmin) {
    res.render('admin/socialUpdates', {
      title: 'Update Social Media'
    });
  }
};