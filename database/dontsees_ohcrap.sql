-- phpMyAdmin SQL Dump
-- version 4.3.8
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Loomise aeg: Jaan 08, 2017 kell 07:46 AM
-- Serveri versioon: 5.6.32-78.1
-- PHP versioon: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Andmebaas: `dontsees_ohcrap`
--

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `locations`
--

CREATE TABLE IF NOT EXISTS `locations` (
  `id` int(11) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `adder` varchar(100) NOT NULL,
  `lat` float DEFAULT NULL,
  `lng` float DEFAULT NULL,
  `rating` int(10) NOT NULL,
  `free` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=150 DEFAULT CHARSET=utf8;

--
-- Andmete tõmmistamine tabelile `locations`
--

INSERT INTO `locations` (`id`, `address`, `adder`, `lat`, `lng`, `rating`, `free`) VALUES
(1, 'ehitajate tee 5', 'test', 59.4035, 24.6882, 0, ''),
(2, 'it-maja', 'test', 59.3969, 24.6627, 0, ''),
(6, 'Raja 15, 12616 Tallinn, Eesti', 'test', 59.3948, 24.6615, 0, ''),
(7, 'Ehitajate tee 7, 12611 Tallinn, Eesti', 'test', 59.3967, 24.671, 0, ''),
(8, 'Ehitajate tee 5, 12616 Tallinn, Eesti', 'test', 59.3945, 24.6689, 0, ''),
(26, 'Kloogaranna tee, 76907 Harju maakond, Eesti', 'test', 59.4528, 24.4061, 0, ''),
(27, 'Kasteheina 13, Suurupi, 76907 Harju maakond, Eesti', 'test', 59.4655, 24.3808, 0, ''),
(28, 'Kasteheina 25, Suurupi, 76907 Harju maakond, Eesti', 'test', 59.4653, 24.38, 0, ''),
(30, 'E. Vilde tee 52, 13416 Tallinn, Eesti', 'user', 59.403, 24.6944, 0, ''),
(31, 'E. Vilde tee 52, 13416 Tallinn, Eesti', 'user', 59.4033, 24.6943, 0, ''),
(32, 'E. Vilde tee 52, 13416 Tallinn, Eesti', 'user', 59.4033, 24.6943, 0, ''),
(33, 'E. Vilde tee 52, 13416 Tallinn, Eesti', 'user', 59.4031, 24.6944, 0, ''),
(34, 'E. Vilde tee 52, 13416 Tallinn, Eesti', 'user', 59.4031, 24.6944, 0, ''),
(35, 'Tallinna Arte Gümnaasium, E. Vilde tee 62, 13421 Tallinn, Eesti', 'user', 59.4036, 24.6909, 0, ''),
(36, 'Sõpruse puiestee 210, 13416 Tallinn, Eesti', 'user', 59.4035, 24.6982, 0, ''),
(37, 'Sõpruse puiestee 200b, 13423 Tallinn, Eesti', 'user', 59.4059, 24.7005, 0, ''),
(38, 'E. Vilde tee 68, 12912 Tallinn, Eesti', 'user', 59.4035, 24.6884, 0, ''),
(39, 'E. Vilde tee 64, 12913 Tallinn, Eesti', 'user', 59.4047, 24.6913, 0, ''),
(40, 'E. Vilde tee 76, 12912 Tallinn, Eesti', 'user', 59.4042, 24.6849, 0, ''),
(41, 'Mustamäe tee 169, 12913 Tallinn, Eesti', 'user', 59.4062, 24.6838, 0, ''),
(42, 'Mustamäe tee 102, 12917 Tallinn, Eesti', 'user', 59.4071, 24.6804, 0, ''),
(43, 'A. H. Tammsaare tee 123, 12917 Tallinn, Eesti', 'user', 59.4073, 24.6783, 0, ''),
(44, 'A. H. Tammsaare tee 135, 12917 Tallinn, Eesti', 'user', 59.4081, 24.6754, 0, ''),
(45, 'E. Vilde tee 75, 12912 Tallinn, Eesti', 'user', 59.4026, 24.6869, 0, ''),
(46, 'Retke tee 1, 13415 Tallinn, Eesti', 'user', 59.4022, 24.707, 0, ''),
(47, 'Sõpruse puiestee 179/181, 13415 Tallinn, Eesti', 'user', 59.4041, 24.7012, 0, ''),
(48, 'E. Vilde tee 60, 13421 Tallinn, Eesti', 'user', 59.4025, 24.6908, 0, ''),
(49, 'Sõpruse puiestee 201/203, 13411 Tallinn, Eesti', 'user', 59.4016, 24.6977, 0, ''),
(50, 'Mäepealse 21/2, 12616 Tallinn, Eesti', 'user', 59.3967, 24.6626, 0, ''),
(51, 'Akadeemia tee 21b, 12618 Tallinn, Eesti', 'user', 59.3981, 24.6609, 0, ''),
(52, 'Sõpruse puiestee 200, 13423 Tallinn, Eesti', 'user', 59.4073, 24.7, 0, ''),
(53, 'E. Vilde tee 78, 12912 Tallinn, Eesti', 'user', 59.4044, 24.6836, 0, ''),
(54, 'IT KOLLEDŽ, 12616 Tallinn, Eesti', 'user', 59.3954, 24.6643, 0, ''),
(55, 'Akadeemia tee 15a, 12616 Tallinn, Eesti', 'user', 59.3969, 24.6627, 0, ''),
(56, 'Ehitajate tee 5, 12616 Tallinn, Eesti', 'user', 59.3944, 24.6684, 0, ''),
(57, 'Kaera 20a, 10318 Tallinn, Eesti', 'user', 59.4458, 24.7013, 0, ''),
(58, 'No addresses selectedd', 'user', 59.4457, 24.7044, 0, ''),
(59, 'Helme 11, 10614 Tallinn, Eesti', 'user', 59.4391, 24.6995, 0, ''),
(60, 'Sõle 51, 10318 Tallinn, Eesti', 'user', 59.4447, 24.7005, 0, ''),
(61, 'Kolde puiestee 73, 10614 Tallinn, Eesti', 'user', 59.4387, 24.6985, 0, ''),
(62, 'Härjapea 25, 10611 Tallinn, Eesti', 'user', 59.4371, 24.7146, 0, ''),
(63, 'Mustakivi tee 25, 13917 Tallinn, Eesti', 'user', 59.4461, 24.8593, 0, ''),
(64, 'Kotzebue 18d, 10414 Tallinn, Eesti', 'user', 59.4446, 24.7233, 0, ''),
(65, 'Aru 28, 10318 Tallinn, Eesti', 'user', 59.4453, 24.7065, 0, ''),
(66, 'Kaera 11, 10318 Tallinn, Eesti', 'user', 59.4455, 24.7071, 0, ''),
(67, 'Aru 21, 10318 Tallinn, Eesti', 'user', 59.4452, 24.706, 0, ''),
(68, 'Küti 2, 10415 Tallinn, Eesti', 'user', 59.4486, 24.7404, 0, ''),
(69, 'Küti 4, 10415 Tallinn, Eesti', 'user', 59.4491, 24.7393, 0, ''),
(70, 'Kaera 22, 10318 Tallinn, Eesti', 'user', 59.4454, 24.7043, 0, ''),
(71, 'Kaera 26, 10318 Tallinn, Eesti', 'user', 59.445, 24.7034, 0, ''),
(72, 'Kaera 18, 10318 Tallinn, Eesti', 'user', 59.4459, 24.7051, 0, ''),
(73, 'Kaera 8, 10318 Tallinn, Eesti', 'user', 59.4462, 24.7067, 0, ''),
(74, 'Kaera 14a, 10318 Tallinn, Eesti', 'user', 59.4465, 24.7051, 0, ''),
(75, 'Kaera 10, 10318 Tallinn, Eesti', 'user', 59.4456, 24.7065, 0, ''),
(76, 'Sõle 51b, 10318 Tallinn, Eesti', 'user', 59.4459, 24.7008, 0, ''),
(77, 'Sõle 47b, 10318 Tallinn, Eesti', 'user', 59.4434, 24.7013, 0, ''),
(78, 'Sõle 45, 10321 Tallinn, Eesti', 'user', 59.4427, 24.7012, 0, ''),
(79, 'Kalaranna 2a, 10415 Tallinn, Eesti', 'user', 59.4495, 24.7405, 0, ''),
(80, 'Küti 15, 10415 Tallinn, Eesti', 'user', 59.449, 24.7365, 0, ''),
(81, 'Vana-Kalamaja 41, 10415 Tallinn, Eesti', 'user', 59.4484, 24.7406, 0, ''),
(82, 'Kaera 22e, 10318 Tallinn, Eesti', 'user', 59.4456, 24.7044, 0, ''),
(83, 'Kaera 14, 10318 Tallinn, Eesti', 'user', 59.4459, 24.7056, 0, ''),
(84, 'Paavli 8, 10412 Tallinn, Eesti', 'user', 59.447, 24.7026, 0, ''),
(85, 'Sõle 50a, 10412 Tallinn, Eesti', 'user', 59.4462, 24.7037, 0, ''),
(86, 'Rukki 20, 10318 Tallinn, Eesti', 'user', 59.4453, 24.7086, 0, ''),
(87, 'Sõle 48, 10318 Tallinn, Eesti', 'user', 59.4451, 24.703, 0, ''),
(88, 'Paavli 7a, 10412 Tallinn, Eesti', 'user', 59.4472, 24.7056, 0, ''),
(89, 'Ehte 1, 10318 Tallinn, Eesti', 'user', 59.4445, 24.7013, 0, ''),
(90, 'Kaera 14f, 10412 Tallinn, Eesti', 'user', 59.4463, 24.704, 0, ''),
(91, 'Kaera 20, 10318 Tallinn, Eesti', 'user', 59.4453, 24.7049, 0, ''),
(92, 'Ristiku 84, 10318 Tallinn, Eesti', 'user', 59.4467, 24.7109, 5, 'Yes'),
(93, 'Puhangu 53, 10316 Tallinn, Eesti', 'user', 59.4437, 24.6954, 3, 'No'),
(94, 'Puhangu 65, 10316 Tallinn, Eesti', 'user', 59.4431, 24.6896, 3, 'No'),
(95, 'Paldiski maantee 80e, 10618 Tallinn, Eesti', 'user', 59.4352, 24.6805, 4, 'Yes'),
(96, 'Tanni tee 17, Tiskre, 76916 Harju maakond, Eesti', 'user', 59.4069, 24.5867, 3, 'No'),
(97, 'Timuti tee, Harku, 76911 Harju maakond, Eesti', 'user', 59.3816, 24.5655, 5, 'Yes'),
(98, 'Kaera 8, 10318 Tallinn, Eesti', 'Tara', 59.4461, 24.7071, 5, 'no'),
(99, 'Kaera 20a, 10318 Tallinn, Eesti', 'Tara', 59.4456, 24.7045, 5, 'no'),
(100, 'Kaera 16, 10318 Tallinn, Eesti', 'Tara', 59.4454, 24.7057, 5, 'no'),
(101, 'Küti 2, 10415 Tallinn, Eesti', 'Tara', 59.4488, 24.7405, 5, 'no'),
(102, 'Küti 4, 10415 Tallinn, Eesti', 'Tara', 59.4486, 24.7394, 5, 'no'),
(103, 'Oda, 10415 Tallinn, Eesti', 'Tara', 59.4492, 24.739, 5, 'no'),
(104, 'Kaera 14, 10318 Tallinn, Eesti', 'Tara', 59.4459, 24.7056, 5, 'no'),
(105, 'Kaera 12, 10318 Tallinn, Eesti', 'Tara', 59.4456, 24.706, 5, 'no'),
(106, 'Akadeemia tee 21/3, 12618 Tallinn, Eesti', 'Tara', 59.3983, 24.6589, 2, 'No'),
(107, 'Akadeemia tee 28, 12611 Tallinn, Eesti', 'Tara', 59.3986, 24.6665, 4, 'Yes'),
(108, 'Sakala 2, 10143 Tallinn, Eesti', 'user', 59.4333, 24.7512, 4, 'No'),
(109, 'Akadeemia tee 3, 12611 Tallinn, Eesti', 'Mormor', 59.3964, 24.6701, 4, 'Yes'),
(110, 'Akadeemia tee 3, 12611 Tallinn, Eesti', 'Farfar', 59.3964, 24.6702, 4, 'Yes'),
(111, 'Akadeemia tee 3, 12611 Tallinn, Eesti', 'Far', 59.3964, 24.6699, 2, 'Yes'),
(112, 'Akadeemia tee 3, 12611 Tallinn, Eesti', 'Mor', 59.3964, 24.67, 2, 'Yes'),
(113, 'Akadeemia tee 3, 12611 Tallinn, Eesti', 'Morfar', 59.3964, 24.67, 3, 'No'),
(114, 'Salme 40a, 10415 Tallinn, Eesti', 'user', 59.4479, 24.7329, 5, 'Yes'),
(115, 'Ehitajate tee 29, 12612 Tallinn, Eesti', 'user', 59.4006, 24.6692, 4, 'Yes'),
(116, 'lalaa', 'user', 59.403, 24.6944, 4, 'yes'),
(117, 'lalaa', '2016-12-20 18:07:53.226', 59.3964, 24.6701, 4, 'yes'),
(118, 'lalaa', '2016-12-20 18:08:23.71', 59.3964, 24.6701, 4, 'yes'),
(119, 'Akadeemia tee 3, 12611 Tallinn, Eesti', '2016-12-20 18:19:46.633', 59.3964, 24.6701, 4, 'yes'),
(120, 'Akadeemia tee 3, 12611 Tallinn, Eesti', '2016-12-20 18:21:26.384', 59.3964, 24.6701, 4, 'yes'),
(121, 'Akadeemia tee 3, 12611 Tallinn, Eesti', '2016-12-20 18:21:31.159', 59.3964, 24.6701, 4, 'yes'),
(122, 'Akadeemia tee 3, 12611 Tallinn, Eesti', '2016-12-20 18:22:59.188', 59.3964, 24.6701, 4, 'yes'),
(123, 'Akadeemia tee 3, 12611 Tallinn, Eesti', '2016-12-20 18:23:04.791', 59.3964, 24.6701, 4, 'yes'),
(124, 'Akadeemia tee 3, 12611 Tallinn, Eesti', '2016-12-20 19:06:48.634', 59.3964, 24.6701, 4, 'yes'),
(125, 'Akadeemia tee 3, 12611 Tallinn, Eesti', '2016-12-20 19:06:53.435', 59.3964, 24.6701, 4, 'yes'),
(126, 'Ehitajate tee 114b, 12915 Tallinn, Eesti', 'TaaviTest', 59.4138, 24.6609, 1, 'Yes'),
(127, 'Sõpruse puiestee 159a, 13418 Tallinn, Eesti', 'user', 59.4103, 24.7064, 5, 'Yes'),
(128, 'Akadeemia tee 3, 12611 Tallinn, Eesti', '2016-12-21 13:19:43.506', 59.3964, 24.6701, 4, 'yes'),
(129, 'Akadeemia tee 3, 12611 Tallinn, Eesti', '2016-12-21 13:19:49.634', 59.3964, 24.6701, 4, 'yes'),
(130, 'J. Sütiste tee 1a, 13411 Tallinn, Eesti', 'Mormor', 59.4012, 24.6975, 3, 'Yes'),
(131, 'J. Sütiste tee 1a, 13411 Tallinn, Eesti', 'Farfar', 59.4009, 24.697, 3, 'Yes'),
(132, 'J. Sütiste tee 1a, 13411 Tallinn, Eesti', 'user', 59.4008, 24.6972, 3, 'Yes'),
(133, 'J. Sütiste tee 1a, 13411 Tallinn, Eesti', 'Morfar', 59.401, 24.6973, 3, 'Yes'),
(134, 'J. Sütiste tee 1a, 13411 Tallinn, Eesti', 'Acess', 59.4012, 24.6966, 3, 'Yes'),
(135, 'Rävala puiestee 12, 10143 Tallinn, Eesti', 'Acess', 59.4332, 24.7514, 3, 'Yes'),
(136, 'Estonia puiestee 9, 10143 Tallinn, Eesti', 'user', 59.4331, 24.7518, 4, 'Yes'),
(137, 'Rävala puiestee 12, 10143 Tallinn, Eesti', 'Mormor', 59.433, 24.7515, 3, 'Yes'),
(138, 'Rävala puiestee 12, 10143 Tallinn, Eesti', 'Farfar', 59.4325, 24.7519, 3, 'Yes'),
(139, 'Rävala puiestee 12, 10143 Tallinn, Eesti', 'user22', 59.4332, 24.7517, 4, 'Yes'),
(140, 'Rävala puiestee 12, 10143 Tallinn, Eesti', 'user23', 59.4331, 24.7517, 4, 'Yes'),
(141, 'Endla 45, 10615 Tallinn, Eesti', 'Farfar', 59.427, 24.7234, 3, 'No'),
(142, 'Endla 45, 10615 Tallinn, Eesti', 'user22', 59.427, 24.723, 4, 'Yes'),
(143, 'Endla 45, 10615 Tallinn, Eesti', 'Mormor', 59.4268, 24.7231, 3, 'Yes'),
(144, 'Akadeemia tee 3, 12611 Tallinn, Eesti', '2016-12-21 16:32:51.217', 59.3964, 24.6701, 4, 'yes'),
(145, 'Akadeemia tee 3, 12611 Tallinn, Eesti', '2016-12-21 16:33:01.683', 59.3964, 24.6701, 4, 'yes'),
(146, 'Akadeemia tee 15a, 12616 Tallinn, Eesti', 'test1234', 59.3968, 24.6628, 4, 'Yes'),
(147, 'Endla 45, 10615 Tallinn, Eesti', 'test1234', 59.4268, 24.7233, 4, 'Yes'),
(148, 'Endla 45, 10615 Tallinn, Eesti', 'test12345', 59.4268, 24.7231, 4, 'Yes'),
(149, 'E. Vilde tee 70, 12912 Tallinn, Eesti', 'user', 59.4038, 24.687, 4, 'Yes');

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `person`
--

CREATE TABLE IF NOT EXISTS `person` (
  `id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Andmete tõmmistamine tabelile `person`
--

INSERT INTO `person` (`id`, `user_name`, `first_name`, `last_name`) VALUES
(1, 'thoward333', 'Fred', 'Howard'),
(2, 'joeherbers', 'Joe', 'Herbers'),
(3, 'jdoe', 'John', 'Doe'),
(4, 'hents', 'Hendrg', 'Sellik'),
(5, 'slkdfj', 'sdfdlöj', 'löskdjdf'),
(6, 'uklh', 'kljh', 'kljh'),
(7, 'sdf', 'sdgf', 'sdgas'),
(8, 'öoisdjrg', 'ökldsjf', 'dflkj');

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `userdata`
--

CREATE TABLE IF NOT EXISTS `userdata` (
  `id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Andmete tõmmistamine tabelile `userdata`
--

INSERT INTO `userdata` (`id`, `username`, `password`) VALUES
(1, 'DontSeeSharp', 'password'),
(2, 'user', 'password'),
(3, 'user', 'password'),
(4, 'user', 'password'),
(5, 'user', 'password'),
(6, 'user', 'password'),
(7, 'sdaf', 'sadf');

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `enabled` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Andmete tõmmistamine tabelile `users`
--

INSERT INTO `users` (`username`, `password`, `enabled`) VALUES
('2016-12-19 23:28:19.386', 'saldfkjsadlfjasdlfkjsaldkfjasldf', 1),
('2016-12-19 23:33:50.275', 'saldfkjsadlfjasdlfkjsaldkfjasldf', 1),
('2016-12-19 23:34:29.782', 'saldfkjsadlfjasdlfkjsaldkfjasldf', 1),
('2016-12-19 23:34:47.458', 'saldfkjsadlfjasdlfkjsaldkfjasldf', 1),
('2016-12-19 23:35:10.297', 'saldfkjsadlfjasdlfkjsaldkfjasldf', 1),
('2016-12-20 11:16:33.092', 'saldfkjsadlfjasdlfkjsaldkfjasldf', 1),
('2016-12-20 12:10:39.446', 'saldfkjsadlfjasdlfkjsaldkfjasldf', 1),
('2016-12-20 17:36:53.959', 'saldfkjsadlfjasdlfkjsaldkfjasldf', 1),
('2016-12-20 17:37:12.331', 'saldfkjsadlfjasdlfkjsaldkfjasldf', 1),
('2016-12-20 18:21:18.073', 'saldfkjsadlfjasdlfkjsaldkfjasldf', 1),
('2016-12-20 18:22:50.62', 'saldfkjsadlfjasdlfkjsaldkfjasldf', 1),
('2016-12-20 19:04:18.222', 'saldfkjsadlfjasdlfkjsaldkfjasldf', 1),
('2016-12-20 19:06:34.307', 'saldfkjsadlfjasdlfkjsaldkfjasldf', 1),
('2016-12-20 19:06:42.228', 'saldfkjsadlfjasdlfkjsaldkfjasldf', 1),
('2016-12-21 13:19:27.867', 'saldfkjsadlfjasdlfkjsaldkfjasldf', 1),
('2016-12-21 13:19:36.399', 'saldfkjsadlfjasdlfkjsaldkfjasldf', 1),
('2016-12-21 16:32:23.521', 'saldfkjsadlfjasdlfkjsaldkfjasldf', 1),
('2016-12-21 16:32:38.018', 'saldfkjsadlfjasdlfkjsaldkfjasldf', 1),
('Acess', 'Denied', 1),
('Far', 'mor', 1),
('Farfar', 'mormor', 1),
('hendrig', 'sellik', 1),
('KKK', 'KKKK', 1),
('lambi', 'lambi', 1),
('lambi2', 'lambi2', 1),
('lambi4', 'lambi4', 1),
('lambi9', 'lambi9', 1),
('lolol', 'lolol', 1),
('Mor', 'far', 1),
('Morfar', 'farmor', 1),
('Mormor', 'farfar', 1),
('sdlfkjsd', 'aaaa', 1),
('Taav', 'taav', 1),
('Taavi', 'Taavi', 1),
('TaaviTest', '1234', 1),
('Taavz', 'dvj', 1),
('Tara', '4321', 1),
('test', 'test', 1),
('test10', 'test10', 1),
('test1234', 'test1234', 1),
('test12345', 'test12345', 1),
('Test2', 'Test2', 1),
('TEST3', 'test3', 1),
('test7', 'test7', 1),
('test9', 'test9', 1),
('user', 'password', 1),
('user123', 'password', 1),
('user22', 'user22', 1),
('user23', 'user23', 1);

-- --------------------------------------------------------

--
-- Tabeli struktuur tabelile `user_roles`
--

CREATE TABLE IF NOT EXISTS `user_roles` (
  `user_role_id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;

--
-- Andmete tõmmistamine tabelile `user_roles`
--

INSERT INTO `user_roles` (`user_role_id`, `username`, `role`) VALUES
(28, '2016-12-19 23:28:19.386', 'ROLE_USER'),
(29, '2016-12-19 23:33:50.275', 'ROLE_USER'),
(30, '2016-12-19 23:34:29.782', 'ROLE_USER'),
(31, '2016-12-19 23:34:47.458', 'ROLE_USER'),
(32, '2016-12-19 23:35:10.297', 'ROLE_USER'),
(33, '2016-12-20 11:16:33.092', 'ROLE_USER'),
(34, '2016-12-20 12:10:39.446', 'ROLE_USER'),
(35, '2016-12-20 17:36:53.959', 'ROLE_USER'),
(36, '2016-12-20 17:37:12.331', 'ROLE_USER'),
(37, '2016-12-20 18:21:18.073', 'ROLE_USER'),
(38, '2016-12-20 18:22:50.62', 'ROLE_USER'),
(39, '2016-12-20 19:04:18.222', 'ROLE_USER'),
(40, '2016-12-20 19:06:34.307', 'ROLE_USER'),
(41, '2016-12-20 19:06:42.228', 'ROLE_USER'),
(43, '2016-12-21 13:19:27.867', 'ROLE_USER'),
(44, '2016-12-21 13:19:36.399', 'ROLE_USER'),
(48, '2016-12-21 16:32:23.521', 'ROLE_USER'),
(49, '2016-12-21 16:32:38.018', 'ROLE_USER'),
(45, 'Acess', 'ROLE_USER'),
(25, 'Far', 'ROLE_USER'),
(24, 'Farfar', 'ROLE_USER'),
(1, 'hendrig', 'ROLE_USER'),
(10, 'KKK', 'ROLE_USER'),
(2, 'lambi', 'ROLE_USER'),
(3, 'lambi2', 'ROLE_USER'),
(4, 'lambi4', 'ROLE_USER'),
(5, 'lambi9', 'ROLE_USER'),
(14, 'lolol', 'ROLE_USER'),
(26, 'Mor', 'ROLE_USER'),
(27, 'Morfar', 'ROLE_USER'),
(23, 'Mormor', 'ROLE_USER'),
(7, 'sdlfkjsd', 'ROLE_USER'),
(11, 'Taav', 'ROLE_USER'),
(13, 'Taavi', 'ROLE_USER'),
(42, 'TaaviTest', 'ROLE_USER'),
(15, 'Taavz', 'ROLE_USER'),
(16, 'Tara', 'ROLE_USER'),
(17, 'test', 'ROLE_USER'),
(18, 'test10', 'ROLE_USER'),
(50, 'test1234', 'ROLE_USER'),
(51, 'test12345', 'ROLE_USER'),
(9, 'Test2', 'ROLE_USER'),
(12, 'TEST3', 'ROLE_USER'),
(22, 'test7', 'ROLE_USER'),
(19, 'test9', 'ROLE_USER'),
(6, 'user', 'ROLE_USER'),
(8, 'user123', 'ROLE_USER'),
(46, 'user22', 'ROLE_USER'),
(47, 'user23', 'ROLE_USER');

--
-- Indeksid tõmmistatud tabelitele
--

--
-- Indeksid tabelile `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- Indeksid tabelile `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id`);

--
-- Indeksid tabelile `userdata`
--
ALTER TABLE `userdata`
  ADD PRIMARY KEY (`id`);

--
-- Indeksid tabelile `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- Indeksid tabelile `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_role_id`), ADD UNIQUE KEY `uni_username_role` (`role`,`username`), ADD KEY `fk_username_idx` (`username`);

--
-- AUTO_INCREMENT tõmmistatud tabelitele
--

--
-- AUTO_INCREMENT tabelile `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=150;
--
-- AUTO_INCREMENT tabelile `person`
--
ALTER TABLE `person`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT tabelile `userdata`
--
ALTER TABLE `userdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT tabelile `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `user_role_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=52;
--
-- Tõmmistatud tabelite piirangud
--

--
-- Piirangud tabelile `user_roles`
--
ALTER TABLE `user_roles`
ADD CONSTRAINT `fk_username` FOREIGN KEY (`username`) REFERENCES `users` (`username`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
