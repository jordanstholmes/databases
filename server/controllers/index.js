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
      
      // invoke function from model that queries the database and returns requested data
      models.messages.get();
      // res.send(data);
      // res.end(data);
    }, 
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

