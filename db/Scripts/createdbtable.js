import query from "../index.js";
//Create a Database Table PLAN
//Name the table the Bootcamper-Tracker
//Use an id as the serial key
//insert 5, id = serial key(NUMBER), week/day(STING), subject(STRING), complete task?(BOOLEAN), incomplete task?(BOOLEAN)
//table for subjects(hardcoded with the options, each subkects have an id)
//use innerjoin to match the id from the main table(topics) to the id in subjects tables
//
const sqlString = `CREATE TABLE IF NOT EXISTS bc-tracker (id SERIAL PRIMARY KEY, week/day TEXT, subject ARRAY, topics ARRAY)`;

async function createDatabaseTable() {
  const res = await query(sqlString);
  console.log(res);
}
createDatabaseTable();
