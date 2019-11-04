
--
-- Table structure for table `venues`
--

DROP TABLE IF EXISTS `venues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `venues` (
  `id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(200) DEFAULT NULL,
  `address` tinytext,
  `images` tinytext,
  `video` tinytext,
  `location_link` tinytext,
  `contact_number` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_at` timestamp NULL DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `description` mediumtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='List of venues and their details.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venues`
--

LOCK TABLES `venues` WRITE;
/*!40000 ALTER TABLE `venues` DISABLE KEYS */;
INSERT INTO `venues` VALUES (1,'Große Festscheune','Achalm Hof, Stettert 6, 72762 Reutlingen','./assets/images/venue1.jpg,./assets/images/venue2.jpg,./assets/images/hall1.jpg,./assets/images/hall2.jpg,./assets/images/hall3.jpg,./assets/images/hall4.jpg','./assets/images/video.mp4','https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10571.425354603814!2d9.2476951!3d48.5168186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1a3b5710bed3a1c!2sAchalm+Hof!5e0!3m2!1sde!2sde!4v1564392770315!5m2!1sde!2sde',' 07121 / 17400','2019-08-08 05:56:00',1,NULL,NULL,NULL,NULL,'Unsere große Festscheune ist mir ihren 375qm² sehr großzügig gestaltet und kann für viele verschiedene Anlässe genutzt werden. Neben Bankettbestuhlung an Rund- so wie Tafeltischen können zudem Schulungen Tagungen und verschiedenste Feierlichkeiten veranstaltet werden. Bei entsprechendem Wetter ist es zudem möglich, Ihre Veranstaltung wie etwa eine freie Trauung in den Herrlichen Außenbereich zu verlegen. In diesem ist ein Naturteich sowie einem Spielplatz für die kleinen Gäste vorhanden. '),(99,NULL,NULL,'./assets/images/coming_soon.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `venues` ENABLE KEYS */;
UNLOCK TABLES;

/** KRR updates **/
ALTER TABLE `achalm_hof`.`inquire_requests`
CHANGE COLUMN `request_status` `request_status` INT(2) NOT NULL ;
ALTER TABLE `achalm_hof`.`inquire_requests`
ADD COLUMN `appointment_time` DATETIME NULL AFTER `deleted_by`,
ADD COLUMN `appointment_message` VARCHAR(200) NULL AFTER `appointment_time`;
ALTER TABLE `achalm_hof`.`inquire_requests`
CHANGE COLUMN `appointment_time` `appointment_time` DATETIME NULL DEFAULT NULL AFTER `venue_id`,
CHANGE COLUMN `appointment_message` `appointment_message` VARCHAR(200) NULL DEFAULT NULL AFTER `appointment_time`;
ALTER TABLE `achalm_hof`.`inquire_requests`
ADD COLUMN `appointment_title` VARCHAR(45) NULL DEFAULT NULL AFTER `venue_id`;


SELECT * FROM achalm_hof.ah_status;CREATE TABLE `ah_status` (
  `status_id` int(2) NOT NULL,
  `status_text` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Stores status details id and the description in detail.';

/*
-- Query: SELECT * FROM achalm_hof.ah_status
-- Date: 2019-11-03 18:49
*/
INSERT INTO `ah_status` (`status_id`,`status_text`) VALUES (1,'pc_requested_inquiry');
INSERT INTO `ah_status` (`status_id`,`status_text`) VALUES (2,'admin_accepted_inquiry');
INSERT INTO `ah_status` (`status_id`,`status_text`) VALUES (3,'admin_rejected_inquiry');
INSERT INTO `ah_status` (`status_id`,`status_text`) VALUES (4,'pc_requested_appointment');
INSERT INTO `ah_status` (`status_id`,`status_text`) VALUES (5,'admin_accepted_appointment');
INSERT INTO `ah_status` (`status_id`,`status_text`) VALUES (6,'admin_rejected_appointment');
INSERT INTO `ah_status` (`status_id`,`status_text`) VALUES (7,'appointment_response_to_be_updated');
INSERT INTO `ah_status` (`status_id`,`status_text`) VALUES (8,'venue_booking_confirmed');
INSERT INTO `ah_status` (`status_id`,`status_text`) VALUES (9,'venue_booking_pending');
INSERT INTO `ah_status` (`status_id`,`status_text`) VALUES (10,'venue_booking_cancelled');
INSERT INTO `ah_status` (`status_id`,`status_text`) VALUES (11,'request_closed');
