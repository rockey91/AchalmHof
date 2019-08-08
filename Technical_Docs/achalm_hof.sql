-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: achalm_hof
-- ------------------------------------------------------
-- Server version	5.5.62

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
-- Table structure for table `admin_calendar`
--

DROP TABLE IF EXISTS `admin_calendar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin_calendar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_user_id` int(11) NOT NULL,
  `schedule_title` tinytext NOT NULL,
  `schedule_start_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `schedule_end_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `primary_color` varchar(45) DEFAULT NULL,
  `seondary_color` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_at` timestamp NULL DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idadmin_calendar_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COMMENT='Holds the schedules of the admin which should be blocked for PC to schedule a meeting.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_calendar`
--

LOCK TABLES `admin_calendar` WRITE;
/*!40000 ALTER TABLE `admin_calendar` DISABLE KEYS */;
INSERT INTO `admin_calendar` VALUES (1,1,'Lunch1','2019-07-22 18:30:00','2019-07-22 18:30:00',NULL,NULL,'2019-07-21 13:37:34',1,NULL,NULL,NULL,NULL),(2,1,'Lunch1','2019-07-20 18:30:00','2019-07-20 18:30:00',NULL,NULL,'2019-07-21 15:19:37',1,NULL,NULL,NULL,NULL),(3,1,'Lunch2','2019-07-20 18:30:00','2019-07-20 18:30:00',NULL,NULL,'2019-07-21 15:21:29',1,NULL,NULL,NULL,NULL),(4,1,'Party hall','2019-07-26 18:30:00','2019-07-26 18:30:00',NULL,NULL,NULL,1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `admin_calendar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin_meetings`
--

DROP TABLE IF EXISTS `admin_meetings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin_meetings` (
  `id` bigint(20) NOT NULL,
  `meeting_date` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `meeting_time` varchar(255) DEFAULT NULL,
  `meeting_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_meetings`
--

LOCK TABLES `admin_meetings` WRITE;
/*!40000 ALTER TABLE `admin_meetings` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin_meetings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appointment_details`
--

DROP TABLE IF EXISTS `appointment_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `appointment_details` (
  `id` bigint(20) NOT NULL,
  `date` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment_details`
--

LOCK TABLES `appointment_details` WRITE;
/*!40000 ALTER TABLE `appointment_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `appointment_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_details`
--

DROP TABLE IF EXISTS `event_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `event_details` (
  `id` int(11) NOT NULL,
  `event_name` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `event_type` varchar(45) NOT NULL,
  `event_date` varchar(45) NOT NULL,
  `message` varchar(255) NOT NULL,
  PRIMARY KEY (`name`,`event_date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='For saving event details';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_details`
--

LOCK TABLES `event_details` WRITE;
/*!40000 ALTER TABLE `event_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `event_details` ENABLE KEYS */;
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
  `request_status` varchar(20) NOT NULL,
  `request_comments` tinytext,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `created_by` int(11) DEFAULT NULL,
  `last_updated_at` timestamp NULL DEFAULT NULL,
  `last_updated_by` varchar(200) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inquire_requests`
--

LOCK TABLES `inquire_requests` WRITE;
/*!40000 ALTER TABLE `inquire_requests` DISABLE KEYS */;
INSERT INTO `inquire_requests` VALUES (11,'YOGESH S',NULL,'1','2019-07-29 07:50:21',120,'8971400707','yogesh24.ds@gmail.com','Party hall booking','party hall booking confirmation',1,'admin_accepted',NULL,'2019-07-29 07:48:55',NULL,NULL,'admin',NULL,NULL),(12,'Rakesh S',NULL,'1','2019-07-30 18:30:00',150,'8971400707','rockey91@gmail.com','Party hall booking','accepted',1,'1',NULL,'2019-07-29 07:49:59',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `inquire_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pc_calendar`
--

DROP TABLE IF EXISTS `pc_calendar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pc_calendar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pc_user_id` int(11) NOT NULL,
  `inquire_request_id` int(11) DEFAULT NULL,
  `schedule_title` tinytext NOT NULL,
  `schedule_start_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `schedule_end_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `pc_comments` varchar(45) DEFAULT NULL,
  `status` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_at` timestamp NULL DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `admin_updated_at` timestamp NULL DEFAULT NULL,
  `admin_updated_by` int(11) DEFAULT NULL,
  `admin_comments` tinytext,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idadmin_calendar_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Holds the schedule requests of the pcs and the status updates from the admins.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pc_calendar`
--

LOCK TABLES `pc_calendar` WRITE;
/*!40000 ALTER TABLE `pc_calendar` DISABLE KEYS */;
/*!40000 ALTER TABLE `pc_calendar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_registration`
--

DROP TABLE IF EXISTS `user_registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_registration` (
  `id` bigint(20) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `event_date` varchar(255) NOT NULL,
  `event_subject` varchar(255) DEFAULT NULL,
  `event_type` varchar(255) NOT NULL,
  `mobile_number` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `no_of_guests` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_registration`
--

LOCK TABLES `user_registration` WRITE;
/*!40000 ALTER TABLE `user_registration` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_registration` ENABLE KEYS */;
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin',1,1,NULL,'2019-07-23 17:05:15','1',NULL,NULL,NULL,NULL),(15,'yogesh24.ds@gmail.com','8971400707@achalm',2,1,NULL,'2019-07-29 07:50:21','admin',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venues`
--

DROP TABLE IF EXISTS `venues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `venues` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `address` tinytext NOT NULL,
  `images` tinytext NOT NULL,
  `location_link` tinytext,
  `contact_number` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_at` timestamp NULL DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `description` mediumtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 COMMENT='List of venues and their details.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venues`
--

LOCK TABLES `venues` WRITE;
/*!40000 ALTER TABLE `venues` DISABLE KEYS */;
INSERT INTO `venues` VALUES (3,'Große Festscheune','Achalm Hof, Stettert 6, 72762 Reutlingen','https://achalmhof.de/wp-content/uploads/2017/04/Homepage-Startseite-Hofladen-300x300.jpg','https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10571.425354603814!2d9.2476951!3d48.5168186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1a3b5710bed3a1c!2sAchalm+Hof!5e0!3m2!1sde!2sde!4v1564392770315!5m2!1sde!2sde',' 07121 / 17400','2019-08-08 05:56:00',1,NULL,NULL,NULL,NULL,'Unsere große Festscheune ist mir ihren 375qm² sehr großzügig gestaltet und kann für viele verschiedene Anlässe genutzt werden. Neben Bankettbestuhlung an Rund- so wie Tafeltischen können zudem Schulungen Tagungen und verschiedenste Feierlichkeiten veranstaltet werden. Bei entsprechendem Wetter ist es zudem möglich, Ihre Veranstaltung wie etwa eine freie Trauung in den Herrlichen Außenbereich zu verlegen. In diesem ist ein Naturteich sowie einem Spielplatz für die kleinen Gäste vorhanden. '),(4,'Große Restue','Achalm Hof, Stettert 6, 72762 Reutlingen','https://achalmhof.de/wp-content/uploads/2017/04/Homepage-Startseite-Hofladen-300x300.jpg','https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10571.425354603814!2d9.2476951!3d48.5168186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1a3b5710bed3a1c!2sAchalm+Hof!5e0!3m2!1sde!2sde!4v1564392770315!5m2!1sde!2sde',' 07121 / 17400','2019-08-08 05:56:00',1,NULL,NULL,NULL,NULL,'Unsere große Festscheune ist mir ihren 375qm² sehr großzügig gestaltet und kann für viele verschiedene Anlässe genutzt werden. Neben Bankettbestuhlung an Rund- so wie Tafeltischen können zudem Schulungen Tagungen und verschiedenste Feierlichkeiten veranstaltet werden. Bei entsprechendem Wetter ist es zudem möglich, Ihre Veranstaltung wie etwa eine freie Trauung in den Herrlichen Außenbereich zu verlegen. In diesem ist ein Naturteich sowie einem Spielplatz für die kleinen Gäste vorhanden. ');
/*!40000 ALTER TABLE `venues` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2019-08-08 21:12:36
