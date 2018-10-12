var models = require('../models');
// var defaultCorsHeaders = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10 // Seconds.
// };

module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      models.messages.get((err, data) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(data); 
          res.send(data);
          res.end();
        }
      });
    }, 
    post: function (req, res) {
      
      models.messages.post(req, (err) => {
        
        if (err) {
          console.log(err);
        } else {
          console.log('success');
          res.end();
        }
      // invoke a function on model that inserts the message into the sql table
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results);
          res.send(results);
          res.end();
        }
      });
    },
    post: function (req, res) {
      
      console.log('post', req.body.username);
      
      models.users.post(req, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('success');
          res.end();
        }
      });
    }
  }
};

