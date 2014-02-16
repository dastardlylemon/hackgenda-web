var Push = require('../models/Push');
/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  Push.getPush(function(err, push) {
    if (err) {
      res.json(err);
    }
    push = push.reverse();
    var newpush = [];
    for (var i = 0; i < 5; i++) {
      newpush.push(push[i]);
    }
    res.render('home', {
      title: 'Home',
      announcements: push
    });
  });
};
