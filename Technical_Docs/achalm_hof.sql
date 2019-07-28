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
-- Table structure for table `admin_calendar`
--

DROP TABLE IF EXISTS `admin_calendar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin_calendar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `admin_user_id` int(11) NOT NULL,
  `schedule_title` tinytext NOT NULL,
  `schedule_desc` tinytext,
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COMMENT='Holds the schedules of the admin which should be blocked for PC to schedule a meeting.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin_calendar`
--

LOCK TABLES `admin_calendar` WRITE;
/*!40000 ALTER TABLE `admin_calendar` DISABLE KEYS */;
INSERT INTO `admin_calendar` VALUES (1,1,'Lunch1',NULL,'2019-07-22 18:30:00','2019-07-22 18:30:00',NULL,NULL,'2019-07-21 13:37:34',1,NULL,NULL,NULL,NULL),(2,1,'Lunch1',NULL,'2019-07-20 18:30:00','2019-07-20 18:30:00',NULL,NULL,'2019-07-21 15:19:37',1,NULL,NULL,NULL,NULL),(3,1,'Lunch2',NULL,'2019-07-20 18:30:00','2019-07-20 18:30:00',NULL,NULL,'2019-07-21 15:21:29',1,NULL,NULL,NULL,NULL),(4,1,'Party hall',NULL,'2019-07-26 18:30:00','2019-07-26 18:30:00',NULL,NULL,NULL,1,NULL,NULL,NULL,NULL),(5,1,'Title1','Desc1','2019-07-28 07:39:44','2019-07-28 07:40:44',NULL,NULL,'2019-07-28 07:40:03',1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `admin_calendar` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inquire_requests`
--

LOCK TABLES `inquire_requests` WRITE;
/*!40000 ALTER TABLE `inquire_requests` DISABLE KEYS */;
INSERT INTO `inquire_requests` VALUES (1,'ABCD',NULL,'ABCD','2019-07-25 10:26:13',300,'+1-3984948','rockey91@gmail.com','Subj','Message',1,'admin_rejected','I would love to have loud speakers at the venue.','2019-07-23 15:02:40',1,'2019-07-25 10:26:13','admin',NULL,NULL),(2,'YOGESH S',NULL,'1','2019-07-23 18:30:00',12,'8971400707','yogesh24.ds@gmail.com','Party hall booking','aASASAS ASASAS',1,'1',NULL,'2019-07-23 16:02:49',NULL,NULL,NULL,NULL,NULL),(3,'YOGESH S',NULL,'1','2019-07-23 18:30:00',12,'8971400707','yogesh24.ds@gmail.com','Party hall booking','aASASAS ASASAS',1,'1',NULL,'2019-07-23 16:03:22',NULL,NULL,NULL,NULL,NULL),(4,'YOGESH S',NULL,'1','2019-07-24 18:30:00',21,'8971400707','yogesh24.ds@gmail.com','Party hall booking','XZ GVVGS',1,'1',NULL,'2019-07-23 16:04:32',NULL,NULL,NULL,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin',1,1,NULL,'2019-07-23 17:05:15','1',NULL,NULL,NULL,NULL),(2,'Testy','test@abc',1,1,NULL,'2019-07-24 16:52:43','1',NULL,NULL,NULL,NULL);
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
  `location_link` tinytext,
  `contact_number` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `last_updated_at` timestamp NULL DEFAULT NULL,
  `last_updated_by` int(11) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COMMENT='List of venues and their details.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venues`
--

LOCK TABLES `venues` WRITE;
/*!40000 ALTER TABLE `venues` DISABLE KEYS */;
INSERT INTO `venues` VALUES (1,'venue1','german','https://achalmhof.de/wp-content/uploads/2017/04/Homepage-Startseite-Hofladen-300x300.jpg','+91-83737890','2019-07-24 17:42:32',1,NULL,NULL,NULL,NULL);
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

-- Dump completed on 2019-07-28 13:11:34
