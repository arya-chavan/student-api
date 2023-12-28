const  Pool = require("pg").Pool;

const pool = new Pool({
  user: "arya",
  host: "localhost",
  database: "students",
  password: "arya",
  port: 5432,
});

module.exports = pool;