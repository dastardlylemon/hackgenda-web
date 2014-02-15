var mongoose = require('mongoose');

var companySchema = new mongoose.Schema({
  name: { type: String, unique: true },
  signupCode: { type: String, unique: true },
});

module.exports = mongoose.model('Sponsor', sponsorSchema);
