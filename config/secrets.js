module.exports = {
  db: process.env.MONGOHQ_URL || 'localhost',

  localAuth: true,
  sessionSecret: "Your Session Secret goes here",

  sendgrid: {
    user: 'Your SendGrid Username',
    password: 'Your SendGrid Password'
  },

  facebookAuth: true,
  facebook: {
    clientID: process.env.FB_APPID,
    clientSecret: process.env.FB_SECRET,
    callbackURL: '/auth/facebook/callback',
    passReqToCallback: true
  },

  githubAuth: false,
  github: {
    clientID: 'Your Client ID',
    clientSecret: 'Your Client Secret',
    callbackURL: '/auth/github/callback',
    passReqToCallback: true
  },

  twitterAuth: true,
  twitter: {
    consumerKey: process.env.TWITTER_KEY,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: '/auth/twitter/callback',
    passReqToCallback: true
  },

  twilio: {
    sid: 'Your Account SID',
    token: 'Your Auth Token'
  },
};
