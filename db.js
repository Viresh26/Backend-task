const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "feb262000",
    database: "bankdata",
    host: "localhost",
    port: "5432"
})

module.exports = pool;