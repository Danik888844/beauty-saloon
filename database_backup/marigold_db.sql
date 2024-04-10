-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Апр 10 2024 г., 09:38
-- Версия сервера: 10.4.28-MariaDB
-- Версия PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `marigold_db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `dateTime` varchar(12) NOT NULL,
  `email` varchar(30) NOT NULL,
  `master` int(11) NOT NULL,
  `services` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`services`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `bookings`
--

INSERT INTO `bookings` (`id`, `dateTime`, `email`, `master`, `services`) VALUES
(13, '2/4/2024', 'admin', 1, '[1,3]'),
(14, '2/5/2024', 'admin', 1, '[1,3]'),
(15, '24/4/2024', 'admin', 1, '[1]'),
(16, '11/4/2024', 'nancy', 1, '[3]');

-- --------------------------------------------------------

--
-- Структура таблицы `masters`
--

CREATE TABLE `masters` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `expirience` int(11) NOT NULL,
  `services` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`services`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `masters`
--

INSERT INTO `masters` (`id`, `fullName`, `expirience`, `services`) VALUES
(1, 'Петровна Ольга Алексеевна', 14, '[1, 3]'),
(2, 'Гуген Александра Ивановна', 4, '[2,3]'),
(3, 'Самойлов Иван Николаевич', 8, '[4,7]'),
(4, 'Ли Светлана Сергеевна', 5, '[4,5,6,7]'),
(5, 'Кадаров Юлия Викторовна', 10, '[1,4,8]'),
(6, 'Спек Александр Михайлович', 6, '[2,6]');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `fullname` varchar(124) NOT NULL,
  `number` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`fullname`, `number`, `email`, `password`) VALUES
('Администратор', '87471836590', 'admin', '$2a$10$YP6T5EasniYMmeHTK37w7eP5AbsHtJb6QXe/Ap7e7peeUfNbuIa6O'),
('Финансова Виктория Олеговна', '65647474754', 'nancy', '$2a$10$a5E5u3Dm9LM19eOmL9xOBekYJ0RXCpjvyozOOmfBLlOcC0qRNlaXi');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `masters`
--
ALTER TABLE `masters`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `masters`
--
ALTER TABLE `masters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
