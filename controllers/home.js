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
    res.render('home', {
      title: 'Home',
      announcements: push
    });
  });
};
