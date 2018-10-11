var db = require('../db/index.js');

module.exports = {
  messages: {
    get: function () {
      db.query('SELECT * FROM messages', (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results[0].text);
        }
      });
      // console.log(db);
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

