`created_at` timestamp NULL DEFAULT NULL,
`created_by` INT(11) DEFAULT NULL,
`last_updated_at` timestamp NULL DEFAULT NULL,
`last_updated_by` INT(11) DEFAULT NULL,
`deleted_at` timestamp NULL DEFAULT NULL,
`deleted_by` INT(11) DEFAULT NULL,


/*
ALTER TABLE `achalm_hof`.`venues` 
ADD COLUMN `created_at` TIMESTAMP NULL AFTER `contact_number`,
ADD COLUMN `created_by` INT(11) DEFAULT NULL,
ADD COLUMN `last_updated_at` timestamp NULL DEFAULT NULL,
ADD COLUMN `last_updated_by` INT(11) DEFAULT NULL,
ADD COLUMN `deleted_at` timestamp NULL DEFAULT NULL,
ADD COLUMN `deleted_by` INT(11) DEFAULT NULL;