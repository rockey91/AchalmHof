CREATE TABLE `inquire_requests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pc_name` varchar(45) DEFAULT NULL,
  `event_type` varchar(45) DEFAULT NULL,
  `event_date` varchar(45) DEFAULT NULL,
  `guests_count` varchar(45) DEFAULT NULL,
  `mobile_number` varchar(45) DEFAULT NULL,
  `email_address` varchar(45) DEFAULT NULL,
  `captcha` varchar(45) DEFAULT NULL,
  `subject` varchar(45) DEFAULT NULL,
  `message` varchar(45) DEFAULT NULL,
  `venue_id` varchar(45) DEFAULT NULL,
  `request_status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;