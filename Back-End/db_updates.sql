CREATE TABLE `achalm_hof`.`event_type` (
  `event_type_id` INT NOT NULL AUTO_INCREMENT,
  `event_type_name` VARCHAR(100) NULL,
  `venue_id` INT NULL,
  `created_at` DATETIME NULL,
  `created_by` VARCHAR(100) NULL,
  PRIMARY KEY (`event_type_id`));

  INSERT INTO `achalm_hof`.`event_type` (`event_type_name`, `venue_id`, `created_at`, `created_by`) VALUES ('Geburtstag', '1', now(), 'Yogesh');
  INSERT INTO `achalm_hof`.`event_type` (`event_type_name`, `venue_id`, `created_at`, `created_by`) VALUES ('Hochzeit', '1', now(), 'Yogesh');
  INSERT INTO `achalm_hof`.`event_type` (`event_type_name`, `venue_id`, `created_at`, `created_by`) VALUES ('Jahrestag', '1', now(), 'Yogesh');


  CREATE TABLE `achalm_hof`.`guests_count_list` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `value` VARCHAR(50) NULL,
    `venue_id` INT NULL,
    `created_at` DATETIME NULL,
    `created_by` VARCHAR(50) NULL,
    PRIMARY KEY (`id`));

INSERT INTO `achalm_hof`.`guests_count_list` (`value`, `venue_id`, `created_at`, `created_by`) VALUES ('50', '1', now(), 'Yogesh');
INSERT INTO `achalm_hof`.`guests_count_list` (`value`, `venue_id`, `created_at`, `created_by`) VALUES ('51-80', '1', now(), 'Yogesh');
INSERT INTO `achalm_hof`.`guests_count_list` (`value`, `venue_id`, `created_at`, `created_by`) VALUES ('81-100', '1', now(), 'Yogesh');
