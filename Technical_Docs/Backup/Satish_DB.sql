CREATE TABLE `admin_meetings` (
  `id` bigint(20) NOT NULL,
  `meeting_date` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `meeting_time` varchar(255) DEFAULT NULL,
  `meeting_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1$$;


CREATE TABLE `appointment_details` (
  `id` bigint(20) NOT NULL,
  `date` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `message` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1$$;


CREATE TABLE `event_details` (
  `id` int(11) NOT NULL,
  `event_name` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `event_type` varchar(45) NOT NULL,
  `event_date` varchar(45) NOT NULL,
  `message` varchar(255) NOT NULL,
  PRIMARY KEY (`name`,`event_date`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='For saving event details';

CREATE TABLE `user_login` (
  `id` bigint(20) NOT NULL,
  `confirmpwd` varchar(255) NOT NULL,
  `logged_in_time` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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















