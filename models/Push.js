var mongoose = require('mongoose');

var updateSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  author: { type: String },
  time: { type: String }
});

var androidPushSchema = new mongoose.Schema({
  id: { type: String, unique: true }
});

var Update = mongoose.model('Push', updateSchema);

var Android = mongoose.model('Android', androidPushSchema);

exports.getPush = function(cb) {
  Update.find({}, function (err, up) {
    if (err) {
      console.log(err);
      cb(err);
      return
    }
    cb(null, up);
  });
};

exports.addAndroidPush = function(id, cb) {
  var android = new Android({
    id: id
  });
  android.save(function(err, and) {
    if (err) {
      cb(err);
      console.log(err);
      return;
    }
    cb(null, and);
  });
};

exports.getAndroidPush = function(cb) {
  Android.find({}, function (err, and) {
    if (err) {
      console.log(err);
      cb(err);
      return
    }
    cb(null, and);
  });
};