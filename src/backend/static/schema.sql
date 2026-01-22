-- schema.sql
DROP TABLE IF EXISTS games;

CREATE TABLE games (
  account           INTEGER PRIMARY KEY,
  game              TEXT NOT NULL,
  category          TEXT NOT NULL,
  memory            REAL CHECK (memory >= 0 AND memory <= 1),
  reasoning         REAL CHECK (reasoning >= 0 AND reasoning <= 1),
  speed             REAL CHECK (speed >= 0 AND speed <= 1),
  difficulty        TEXT NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
  completion_date   TEXT NOT NULL CHECK (
    completion_date GLOB '[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]'
    AND date(completion_date) IS NOT NULL
  ),
  completion_time   TEXT NOT NULL CHECK (
    completion_time GLOB '[0-9][0-9]:[0-9][0-9]:[0-9][0-9]'
    AND time(completion_time) IS NOT NULL
  )
);