-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 01 déc. 2021 à 01:43
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `todolist`
--

-- --------------------------------------------------------

--
-- Structure de la table `todolist1`
--

CREATE TABLE `todolist1` (
  `id` int(5) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `element1` varchar(50) DEFAULT NULL,
  `element2` varchar(50) DEFAULT NULL,
  `element3` varchar(50) DEFAULT NULL,
  `element4` varchar(50) DEFAULT NULL,
  `element5` varchar(50) DEFAULT NULL,
  `element6` varchar(50) DEFAULT NULL,
  `element7` varchar(50) DEFAULT NULL,
  `element8` varchar(50) DEFAULT NULL,
  `element9` varchar(50) DEFAULT NULL,
  `element10` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `todolist1`
--
ALTER TABLE `todolist1`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `todolist1`
--
ALTER TABLE `todolist1`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
