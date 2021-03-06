var mongoose = require('mongoose');

var repSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  email: { type: String },
  twitter: { type: String }
});

var companySchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  tier: { type: Number },
  logourl: { type: String },
  award: { type: Boolean },
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

exports.sortSponsor = function(sponsors) {
  var tiered = {};
  for (var i = 0; i < sponsors.length; i++) {
    if (!tiered[sponsors[i].tier]) {
      tiered[sponsors[i].tier] = [];
    }
    tiered[sponsors[i].tier].push(sponsors[i]);
  }
  var tieredarray = [];
  for (key in tiered) {
    tieredarray.push(tiered[key]);
  }
  return tieredarray;
}

exports.addSponsor = function(cmpy, cb) {
  Sponsor.findOne({name:cmpy.name}, function(err, company) {
    console.log(company);
    if (err || !company) {
      var company = new Sponsor({
        name: cmpy.name,
        tier: cmpy.tier,
        description: cmpy.description,
        logourl: cmpy.logourl,
        url: cmpy.url,
        reps: [{
          name: cmpy.repname,
          description: cmpy.repdescription,
          email: cmpy.repemail,
          twitter: cmpy.reptwitter
        }]
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
      company.description = cmpy.description || company.description;
      company.url = cmpy.url || company.url;
      company.logourl = cmpy.logourl || company.logo;
      if (!company.reps) {
        company.reps = [];
      }

      company.reps.push({
          name: cmpy.repname,
          description: cmpy.repdescription,
          email: cmpy.repemail,
          twitter: cmpy.reptwitter
        });
    
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