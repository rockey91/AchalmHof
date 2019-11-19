ALTER TABLE `achalm_hof`.`inquire_requests`
CHANGE COLUMN `guests_count` `guests_count` VARCHAR(20) NOT NULL ;

ALTER TABLE `achalm_hof`.`venues`
ADD COLUMN `guests_count` tinytext;

ALTER TABLE `testspringboot`.`venues`
ADD COLUMN `event_types` tinytext;


INSERT INTO `venues` VALUES (1,'Große Festscheune','Achalm Hof, Stettert 6, 72762 Reutlingen',
'./assets/images/venue1.jpg,./assets/images/venue2.jpg,./assets/images/hall1.jpg,./assets/images/hall2.jpg,
./assets/images/hall3.jpg,./assets/images/hall4.jpg','./assets/images/video.mp4',
'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10571.425354603814!2d9.2476951!3d48.5168186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf1a3b5710bed3a1c!2sAchalm+Hof!5e0!3m2!1sde!2sde!4v1564392770315!5m2!1sde!2sde',' 07121 / 17400',
'2019-08-08 00:26:00',1,NULL,NULL,NULL,NULL,
'Unsere große Festscheune ist mir ihren 375qm² sehr großzügig gestaltet und kann für viele verschiedene Anlässe genutzt werden. Neben Bankettbestuhlung an Rund- so wie Tafeltischen können zudem Schulungen Tagungen und verschiedenste Feierlichkeiten veranstaltet werden. Bei entsprechendem Wetter ist es zudem möglich, Ihre Veranstaltung wie etwa eine freie Trauung in den Herrlichen Außenbereich zu verlegen. In diesem ist ein Naturteich sowie einem Spielplatz für die kleinen Gäste vorhanden. ','70,70-110,110-140','Geburtstag,Hochzeit,Jahrestag'),
(99,NULL,NULL,'./assets/images/coming_soon.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
