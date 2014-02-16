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
  Schedule.getSchedule(function(err, sched) {
    if (err) {
      req.flash('errors', errors);
      return req.redirect('admin/scheduleUpdates');
    }
    if (req.user.isAdmin) {
      res.render('admin/scheduleUpdates', {
        title: 'Update Schedule',
        schedule: sched
      });
      console.log(sched);
    } else {
      res.redirect('schedule');
    }
  });
};

exports.postScheduleUpdates = function(req, res) {
  if (req.user.isAdmin) {
    var evt = {
      name: req.body.name,
      description: req.body.description,
      time: req.body.time,
      endtime: req.body.endtime,
      url: req.body.url,
    };
    Schedule.addEvent(req.body.day, evt, function(err, sched) {
      if (err) {
        req.flash('error adding event');
        return res.json(err);
      } else {
        req.flash('success', { msg: 'Event added' } );
        res.redirect('admin/scheduleUpdates');
      }
    });
  } else {
    res.flash('error', { msg: 'Permission denied.' });
    res.json('permission denied');
  }
};

exports.sponsorUpdates = function(req, res) {
  Sponsor.getSponsor(function(err, spsr) {
    if (err) {
      req.flash('errors', errors);
      return req.redirect('admin/scheduleUpdates');
    }
    if (req.user.isAdmin) {
      res.render('admin/scheduleUpdates', {
        title: 'Update Schedule',
        schedule: sched
      });
      console.log(sched);
    } else {
      res.redirect('schedule');
    }
  });
};

exports.postSponsorUpdates = function(req, res) {
  if (req.user.isAdmin) {
    var evt = {
      name: req.body.name,
      description: req.body.description,
      time: req.body.time,
      endtime: req.body.endtime,
      url: req.body.url,
    };
    Schedule.addEvent(req.body.day, evt, function(err, sched) {
      if (err) {
        req.flash('error adding event');
        return res.json(err);
      } else {
        req.flash('success', { msg: 'Event added' } );
        res.redirect('admin/scheduleUpdates');
      }
    });
  } else {
    res.flash('error', { msg: 'Permission denied.' });
    res.json('permission denied');
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