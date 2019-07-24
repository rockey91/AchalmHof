ALTER TABLE `achalm_hof`.`inquire_requests`
CHANGE COLUMN `created_by` `created_by` INT(11) NULL ;

ALTER TABLE `achalm_hof`.`users`
CHANGE COLUMN `status` `status` INT(1) NULL DEFAULT '0' ;
