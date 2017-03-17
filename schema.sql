DROP DATABASE IF EXISTS github;

CREATE DATABASE github;

USE github;

CREATE TABLE repos (
  ID integer PRIMARY KEY AUTO_INCREMENT,
  repoId varchar(30) NOT NULL,
  name varchar(50) NOT NULL,
  htmlUrl varchar(100) NOT NULL
);