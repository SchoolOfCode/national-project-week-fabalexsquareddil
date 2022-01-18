import pg from "pg";
import { db } from "../config.js";

console.log(
  db.user,
  db.host,
  db.database,
  db.password,
  db.port,
  "TESTING ENV VARS"
);

const pool = new pg.Pool({
  user: db.user,
  host: db.host,
  database: db.database,
  password: db.password,
  port: db.port,
  //ssl: false,
});

// const pool = new Pool();
export default function query(text, params) {
  return pool.query(text, params);
}
