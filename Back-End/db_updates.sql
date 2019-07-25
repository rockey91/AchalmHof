ALTER TABLE `achalm_hof`.`inquire_requests`
CHANGE COLUMN `created_by` `created_by` INT(11) NULL ;

ALTER TABLE `achalm_hof`.`users`
CHANGE COLUMN `status` `status` INT(1) NULL DEFAULT '0' ;

ALTER TABLE `achalm_hof`.`venues`
CHANGE COLUMN `id` `id` INT(11) NOT NULL AUTO_INCREMENT ;

ALTER TABLE `achalm_hof`.`inquire_requests`
CHANGE COLUMN `last_updated_by` `last_updated_by` VARCHAR(200) NULL DEFAULT NULL ;
