-- MySQL dump 10.13  Distrib 5.6.23, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: achalm_hof
-- ------------------------------------------------------
-- Server version	5.5.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ah_status`
--

DROP TABLE IF EXISTS `ah_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ah_status` (
  `status_id` int(2) NOT NULL,
  `status_text` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`status_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Stores status details id and the description in detail.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ah_status`
--

LOCK TABLES `ah_status` WRITE;
/*!40000 ALTER TABLE `ah_status` DISABLE KEYS */;
INSERT INTO `ah_status` VALUES (1,'pc_requested_inquiry'),(2,'admin_accepted_inquiry'),(3,'admin_rejected_inquiry'),(4,'pc_requested_appointment'),(5,'admin_accepted_appointment'),(6,'admin_rejected_appointment'),(7,'appointment_response_to_be_updated'),(8,'venue_booking_confirmed'),(9,'venue_booking_pending'),(10,'venue_booking_cancelled'),(11,'request_closed');
/*!40000 ALTER TABLE `ah_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_type`
--

DROP TABLE IF EXISTS `event_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `event_type` (
  `event_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `event_type_name` varchar(100) DEFAULT NULL,
  `venue_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_by` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`event_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_type`
--

LOCK TABLES `event_type` WRITE;
/*!40000 ALTER TABLE `event_type` DISABLE KEYS */;
INSERT INTO `event_type` VALUES (1,'Geburtstag',1,'2019-11-26 19:30:53','Yogesh'),(2,'Hochzeit',1,'2019-11-26 19:30:53','Yogesh'),(3,'Jahrestag',1,'2019-11-26 19:30:53','Yogesh'),(4,'Test',1,NULL,NULL);
/*!40000 ALTER TABLE `event_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guests_count_list`
--

DROP TABLE IF EXISTS `guests_count_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `guests_count_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `value` varchar(50) DEFAULT NULL,
  `venue_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guests_count_list`
--

LOCK TABLES `guests_count_list` WRITE;
/*!40000 ALTER TABLE `guests_count_list` DISABLE KEYS */;
INSERT INTO `guests_count_list` VALUES (1,'90-120',1,'2019-11-26 19:30:53','Yogesh'),(2,'121-150',1,'2019-11-26 19:30:53','Yogesh'),(3,'151-180',1,'2019-11-26 19:30:53','Yogesh'),(4,'181-210',1,NULL,NULL),(5,'211-250',1,NULL,NULL);
/*!40000 ALTER TABLE `guests_count_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inquire_requests`
--

DROP TABLE IF EXISTS `inquire_requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inquire_requests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pc_name` varchar(200) NOT NULL,
  `pc_user_id` int(11) DEFAULT NULL,
  `event_type` varchar(45) NOT NULL,
  `event_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `guests_count` int(10) NOT NULL,
  `mobile_number` varchar(20) NOT NULL,
  `email_address` varchar(200) NOT NULL,
  `subject` tinytext NOT NULL,
  `message` tinytext NOT NULL,
  `venue_id` int(11) NOT NULL,
  `appointment_title` varchar(45) DEFAULT NULL,
  `appointment_time` datetime DEFAULT NULL,
  `appointment_message` varchar(200) DEFAULT NULL,
  `request_status` int(2) NOT NULL,
  `request_comments` tinytext,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `created_by` int(11) DEFAULT NULL,
  `last_updated_at` timestamp NULL DEFAULT NULL,
  `last_updated_by` varchar(200) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inquire_requests`
--

LOCK TABLES `inquire_requests` WRITE;
/*!40000 ALTER TABLE `inquire_requests` DISABLE KEYS */;
INSERT INTO `inquire_requests` VALUES (1,'Rakesh',NULL,'2','2019-12-08 09:42:05',3,'1234567890','rockey91@gmail.com','Subject','Message',1,NULL,NULL,NULL,3,NULL,'2019-12-08 08:16:08',NULL,NULL,'admin',NULL,NULL),(2,'RakeshTwo',NULL,'1','2019-12-08 10:10:00',5,'1234567464','rockey91@gmail.com','Birthday at your location','Testggsagsa',1,'App Tit 1','2019-12-11 15:30:00','srttkdu',4,NULL,'2019-12-08 08:23:43',NULL,'2019-12-08 10:10:00','admin',NULL,NULL);
/*!40000 ALTER TABLE `inquire_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role` int(11) NOT NULL,
  `status` int(1) DEFAULT '0',
  `password_changed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` varchar(45) NOT NULL,
  `last_updated_at` timestamp NULL DEFAULT NULL,
  `last_updated_by` varchar(45) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deleted_by` varchar(45) DEFAULT NULL,
  `passwordsalt` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin',1,1,NULL,'2019-07-23 17:05:15','1',NULL,NULL,NULL,NULL,NULL),(34,'rockey91@gmail.com','1234567890@achalm',2,1,NULL,'2019-12-08 08:22:34','admin',NULL,NULL,NULL,NULL,NULL),(35,'rockey91@gmail.com','1234567464@achalm',2,1,NULL,'2019-12-08 09:43:35','admin',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

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
INSERT INTO `venues` VALUES (1,'Große Festscheune','Achalm Hof, Stettert 6, 72762 Reutlingen','./assets/images/venue1.jpg,./assets/images/venue2.jpg,./assets/images/hall1.jpg,./assets/images/hall2.jpg,./assets/images/hall3.jpg,./assets/images/hall4.jpg','./assets/images/video.mp4','https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10571.425354603814!2d9.2476951!3d48.5168186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1a3b5710bed3a1c!2sAchalm+Hof!5e0!3m2!1sde!2sde!4v1564392770315!5m2!1sde!2sde',' 07121 / 17400','2019-08-08 00:26:00',1,NULL,NULL,NULL,NULL,'Unsere große Festscheune ist mir ihren 375qm² sehr großzügig gestaltet und kann für viele verschiedene Anlässe genutzt werden. Neben Bankettbestuhlung an Rund- so wie Tafeltischen können zudem Schulungen Tagungen und verschiedenste Feierlichkeiten veranstaltet werden. Bei entsprechendem Wetter ist es zudem möglich, Ihre Veranstaltung wie etwa eine freie Trauung in den Herrlichen Außenbereich zu verlegen. In diesem ist ein Naturteich sowie einem Spielplatz für die kleinen Gäste vorhanden. '),(99,NULL,NULL,'./assets/images/coming_soon.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `venues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'achalm_hof'
--

--
-- Dumping routines for database 'achalm_hof'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-08 23:23:00
