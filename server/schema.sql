DROP DATABASE if exists chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

-- INSERT INTO users (name) VALUES
-- ('alex'),
-- ('jordan');

-- CREATE TABLE rooms (
--   id INT NOT NULL AUTO_INCREMENT,
--   name VARCHAR(50) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- INSERT INTO rooms (name) VALUES
-- ('lobby'),
-- ('bathroom');

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(200) NOT NULL,
  user_id INT NOT NULL,
  -- room_id INT,
  roomname VARCHAR(50) NOT NULL,
  -- INDEX (user_id),
  -- INDEX (room_id),
  PRIMARY KEY (id)
  -- FOREIGN KEY (user_id) REFERENCES users(id),
  -- FOREIGN KEY (room_id) REFERENCES rooms(id)
);

-- INSERT INTO messages (text, roomname, user_id) VALUES
-- ('Hello world', 'lobby', 1),
-- ('test2', 'hall', 2);

-- INSERT INTO users (username, id) VALUES
-- ('peter', 1),
-- ('hans', 2);

--   -- FOREIGN KEY (room_id) REFERENCES rooms(id)

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

