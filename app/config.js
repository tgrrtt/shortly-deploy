var mongoose = require('mongoose');
var path = require('path');

if (process.env.NODE_ENV && process.env.NODE_ENV === 'production') {
  mongoose.connect('mongodb://MongoLab-62:3XuhKzfZTlyEWxSaDTwTFEgah9vO0LDYw2694jV_Xbw-@ds052837.mongolab.com:52837/MongoLab-62');
} else {
  mongoose.connect('mongodb://localhost/test');
}
var db = mongoose.connection;

var Schema = mongoose.Schema;


db.on('err', console.error.bind(console, 'database error happened'));
db.once('open', function(){
  console.log("Mongodb connection has been opened", process.env.NODE_ENV);
});



// var db = Bookshelf.initialize({
//   client: 'sqlite3',
//   connection: {
//     host: '127.0.0.1',
//     user: 'your_database_user',
//     password: 'password',
//     database: 'shortlydb',
//     charset: 'utf8',
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   }
// });

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('base_url', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

exports = db;
