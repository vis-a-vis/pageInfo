/*DROP DATABASE IF EXISTS page_info;

CREATE DATABASE page_info;

USE page_info;
*/
/*CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT,
  category varchar(20) NOT NULL,
  room_name varchar(20) NOT NULL,
  city varchar(20) NOT NULL,
  guest_num int NOT NULL,
  bedroom_num int NOT NULL,
  bath_num int NOT NULL,
  description varchar(500) NOT NULL,
  more_description varchar(3000) NOT NULL,
  house_rules varchar(100) NOT NULL,
  more_rules varchar(1000) NOT NULL,
  cancel_policy varchar(200) NOT NULL,
  more_cancel_policy varchar(300) NOT NULL,
  sleeping_arrangment varchar(100) NOT NULL,
  amenities varchar(2000) NOT NULL

  PRIMARY KEY (id)
);

-- rooms
INSERT into room (category, room_name, city, guest_num, 
  bedroom_num, bath_num, description, more_description, 
  house_rules, more_rules, cancel_policy, more_cancel_policy,
  sleeping_arrangment, amenities) VALUES (1, 26, 0);*/


DROP DATABASE IF EXISTS page_info;

CREATE DATABASE page_info;

USE page_info;

CREATE TABLE `myTable` (
  `id` int NOT NULL auto_increment,
  `category` TEXT default NULL,
  `room_name` TEXT default NULL,
  `city` varchar(255),
  `guest_num` mediumint default NULL,
  `bedroom_num` mediumint default NULL,
  `bath_num` mediumint default NULL,
  `description` TEXT default NULL,
  `more_description` TEXT default NULL,
  `house_rules` TEXT default NULL,
  `more_rules` TEXT default NULL,
  `cancel_policy` TEXT default NULL,
  `more_cancel_policy` TEXT default NULL,
  `sleeping_arrangement` TEXT default NULL,
  `amenities` TEXT default NULL,
  PRIMARY KEY (`id`)
) AUTO_INCREMENT=1;
