var gcm = require('node-gcm');

exports.sendMessage = function(title, message, cb) {
  var message = new gcm.Message();
 
  //API Server Key
  var sender = new gcm.Sender(process.env.GCM_KEY);
  var registrationIds = [];
   
  // Value the payload data to send...
  message.addData('message', message);
  message.addData('title', title );
  message.addData('msgcnt','3'); // Shows up in the notification in the status bar
  message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
  //message.collapseKey = 'demo';
  //message.delayWhileIdle = true; //Default is false
  message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
   
  // At least one reg id required
  registrationIds.push('APA91bFeehPji-ouPWj-XaeGP17-mykQ0wPyIOW1ODi6o6t9VrQW0wn2AYg_A8C7RNwGwlW4ZAoqVFH5WWzQOJ9FjiqelSPCvRCiDr7yGopycTg8SGrakcffpUwi2Lm0fhK3AmmuM4VkZglAUsTUc34Yh8LNkRxfwLKKNK1AdPU6u52McZG2IBw');
   
  /**
   * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
   */
  sender.send(message, registrationIds, 4, function (result) {
      console.log(result);
      cb(result);
  });
}
