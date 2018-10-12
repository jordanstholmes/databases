var db = require('../db/index.js');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', (err, results) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      });
    }, // a function which produces all the messages
    post: function (req, callback) {
      var queryCommand = 'INSERT INTO messages (username, roomname, text) VALUES (?, ?, ?)';
      db.query(queryCommand, [req.body.username, req.body.roomname, req.body.text], (err) => {
        if (err) {
          console.log(err);
        } else {
          callback();
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

