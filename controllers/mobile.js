var Schedule = require('../models/Schedule');
var Sponsor = require('../models/Sponsor');
var Push = require('../models/Push');
var user = require('./user');
var gcm = require('node-gcm');
//var twilio = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_SID);

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

exports.announcements = function(req, res) {
  Push.getPush(function(err, push) {
    if (err) {
      res.json(err);
    }
    res.json(push);
    console.log(push);
  });
};

exports.android = function(req, res) {
  Push.addAndroidPush(req.param('id'), function(err, and) {
    if (err) {
      res.json(err);
    }
    res.json(and);
    console.log("android" + and);
  });
}

exports.pushAndroidMessage = function(message, cb) {
  var message = new gcm.Message();
   
  //API Server Key
  var sender = new gcm.Sender(process.env.GCM_KEY);
  Push.getAndroidPush(function(err, registrationIds){
    console.log(message);
    // Value the payload data to send...
    message.addData('message',message);
    message.addData('title', 'Hackgenda');
    message.addData('msgcnt','3'); // Shows up in the notification in the status bar
    message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
    //message.collapseKey = 'demo';
    //message.delayWhileIdle = true; //Default is false
    message.timeToLive = 30000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
     
    /**
     * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
     */
    sender.send(message, registrationIds, 4, function (result) {
      console.log(result);
      //cb(result);
    });
  });
}

/*
exports.pushTwilio = function(message, cb) {
  user.getNumbers(function(err, nums) {
    for (var i = 0; i < nums.length; i++) {
      var message = {
        to: nums[i],
        from: '+12345678900',
        body: message
      };
      twilio.sendMessage(message, function(err, responseData) {
        if (err) return console.log(err.message);
      });
    }
  });
};
*/