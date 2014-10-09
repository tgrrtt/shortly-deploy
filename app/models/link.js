var mongoose = require('mongoose');
var crypto = require('crypto');

var Schema = mongoose.Schema;

var codify = function(url) {
  var shasum = crypto.createHash('sha1');
  shasum.update(url);
  return shasum.digest('hex').slice(0, 5);
};

var urlsSchema = new Schema({
  id: Number,
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number,
  timestamp: {type: Date, default: Date.now }
});

urlsSchema.pre('save', function (next) {
  this.code = codify(this.url);
  // console.log('%s has been saved', this.code);
  next();
});

var Link = mongoose.model('Link', urlsSchema);

module.exports = Link;


  // initialize: function(){
  //   this.on('creating', function(model, attrs, options){

  //   });
  // }

//shortly.com/X39xk
