var mongoose = require('mongoose');

var repSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  description: { type: String },
  email: { type: String, unique: true},
  twitter: { type: String, unique: true}
});

var companySchema = new mongoose.Schema({
  name: { type: String, unique: true },
  description: { type: String },
  tier: { type: Number },
  logourl: { type: String },
  url: { type: String },
  reps: [repSchema]
});

var Sponsor = mongoose.model('Sponsor', companySchema);

exports.getSponsor = function(cb) {
  Sponsor.find({}, function (err, spsr) {
    if (err) {
      console.log(err);
      cb(err);
      return
    }
    cb(null, spsr);
  });
}

exports.addSponsor = function(cmpy, cb) {
  Sponsor.findOne({name:cmpy}, function(err, company) {
    if (err || !company.name) {
      var company = new Sponsor({
        name: cmpy.name,
        tier: cmpy.tier,
        logourl: cmpy.logourl,
        reps: cmpy.reps
      });
      company.save(function(err, spsr) {
        if (err) {
          cb(err);
          console.log(err);
          return;
        }
        cb(null, spsr);
      });
    } else {
      company.name = cmpy.name;
      company.tier = cmpy.tier || company.tier;
      company.logourl = cmpy.logourl || company.logo;
      if (!company.reps) {
        company.reps = [];
      }
      for (var i = 0; i < cmpy.reps.length; i++) {
        company.reps.push(evnt);
      }
    
      company.save(function(err, spsr) {
        if (err) {
          cb(err);
          console.log(err);
          return;
        }
        cb(null, spsr);
      });
    }
  });
}