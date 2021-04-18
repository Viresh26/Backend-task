const Pool = require("pg").Pool;

const pool = new Pool({
    user: "u57p00m9xs88qw5ycrx9",
    password: "ab2rfMMDkgUiWMqN9MIC",
    database: "bwm0cpbauireqfu0ieeg",
    host: "bwm0cpbauireqfu0ieeg-postgresql.services.clever-cloud.com",
    port: "5432"
})

module.exports = pool;