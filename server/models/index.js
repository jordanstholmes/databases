var db = require('../db/index.js');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 
      `SELECT users.username, messages.roomname, messages.text, messages.id
      FROM users, messages
      WHERE users.id = messages.user_id`;
      db.query(queryString, (err, results) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      });
    }, // a function which produces all the messages
    post: function (req, callback) {
      var {username, roomname, text} = req.body;
      
      var queryUserId = `SELECT users.id FROM users WHERE users.username = ?`;
      var insertMessage = `INSERT INTO messages (roomname, text, user_id) VALUES (?, ?, ?)`;
      
      db.query(queryUserId, [username], (err, results) => {
        
        if (err) {
          console.log(err);
        
        } else {
          var userId = results[0].id;
          db.query(insertMessage, [roomname, text, userId], (err) => {
            if (err) {
              console.log(err);
            } else {
              callback();
            }
          });
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = 'SELECT users.username FROM users';
      db.query(queryString, (err, results) => {
        if (err) {
          callback(err);
        } else {
          // console.log(results);
          callback(null, results);
        }
      });
    },
    post: function () {}
  }
};

