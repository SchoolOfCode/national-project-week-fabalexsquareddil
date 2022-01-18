import query from "../index.js";
//Create a Database Table PLAN
//Name the table the Bootcamper-Tracker
//Use an id as the serial key
//insert 5, id = serial key(NUMBER), week/day(STING), subject(STRING), complete task?(BOOLEAN), incomplete task?(BOOLEAN)

query(
  `CREATE TABLE IF NOT EXISTS bc-tracker (id SERIAL PRIMARY KEY, week/day TEXT, subject TEXT, incompletetasks BOOL, completetasks BOOL)`
);

// const sqlString =
//   "CREATE TABLE IF NOT EXISTS userScores (id SERIAL PRIMARY KEY, user TEXT, score INT)";

// async function createScoreTable() {
//   const res = await query(sqlString);
//   console.log(res);
// }
// createScoreTable();
