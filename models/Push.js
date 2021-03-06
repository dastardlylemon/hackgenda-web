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

exports.addPush = function(push, cb) {
  var currentdate = new Date(); 
  var datetime = "" + (currentdate.getMonth()+1) + "/" 
    + currentdate.getDate() + "/"
    + currentdate.getFullYear() + " "  
    + currentdate.getHours() + ":"  
    + currentdate.getMinutes();

  var update = new Update({
    name: push.name,
    description: push.message,
    author: push.author,
    time: datetime
  });
  update.save(function(err, up) {
    if (err) {
      cb(err);
      console.log(err);
      return;
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
    var ids = [];
    for (var i = 0; i < and.length; i++) {
      ids.push(and[i].id);
    }
    cb(null, ids);
  });
};
