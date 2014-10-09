var mongoose = require('mongoose');
var crypto = require('crypto');

var Schema = mongoose.Schema;

var urlsSchema = new Schema({
  id: Number,
  url: String,
  base_url: String,
  code: String,
  title: String,
  visits: Number,
  timestamp: {type: Date, default: Date.now }
});

var Link = mongoose.model('Link', urlsSchema);
  // tableName: 'urls',
  // hasTimestamps: true,
  // defaults: {
  //   visits: 0

module.exports = Link;
