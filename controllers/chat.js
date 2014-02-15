/**
 * GET /contact
 * Contact form page.
 */

exports.getChat = function(req, res) {
  res.render('chat', {
    title: 'Chat'
  });
};
