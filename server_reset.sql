-- Copiar todo el contenido de este archivo y apretar Run All. (CTRL+SHIFT+ENTER)
--
DROP TABLE IF EXISTS `article`;

CREATE TABLE `article` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dateAdded` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

INSERT INTO
  `article` (`id`, `title`, `content`, `img`, `dateAdded`)
VALUES
  (
    1,
    'Cómo adiestrar a un wookie desobediente',
    'Lorem ipsum x50',
    'ruta a imagen',
    '2022-05-13 16:53:03'
  ),
  (
    2,
    'La verdad de la milanesa sobre Anakin y Padme',
    'Qué hacés aquí pillo?',
    'ruta a imgen2',
    '2022-05-13 16:53:03'
  ),
  (
    3,
    'Probando un tecer titulo',
    'Este es un texto de prueba',
    'Ruta a la tercera imagen',
    '2022-05-13 16:53:03'
  );

DROP TABLE IF EXISTS `author`;

CREATE TABLE `author` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

INSERT INTO
  `author` (`id`, `firstname`, `lastname`, `email`)
VALUES
  (1, 'Alberto', 'Del hoyo', 'albertohoyo@hoyo.com'),
  (2, 'Segundo', 'Hoyo', 'elmejor@gmail.com'),
  (3, 'Hoyo', 'Enuno', 'dieciochoveces@golf.com');

DROP TABLE IF EXISTS `comment`;

CREATE TABLE `comment` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `article_id` bigint DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 8 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

INSERT INTO
  `comment` (`id`, `article_id`, `content`)
VALUES
  (
    1,
    1,
    'En verdad creen que no nos damos cuenta???'
  ),
  (
    2,
    1,
    'Yo lo vonocí ayer y me pareció una gran persona!'
  ),
  (3, 1, 'No más collares para wookies!'),
  (4, 2, 'Ya sabíamos!'),
  (5, 2, 'Qué sorpresa!'),
  (6, 2, 'Próximamente en LAM!'),
  (7, 3, 'Comentario de prueba');

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

INSERT INTO
  `user` (`id`, `firstname`, `lastname`)
VALUES
  (1, 'Agustín', 'Hagoosteen'),
  (2, 'Shaka', 'Cavalieri Doro');