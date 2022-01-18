import query from "../index.js";

query(
  `INSERT INTO bc-tracker VALUES (id SERIAL PRIMARY KEY, week/day TEXT, subject TEXT, incompletetasks BOOL, completetasks BOOL)`
);
