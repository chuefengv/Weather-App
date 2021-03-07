const Pool = require('pg').Pool;

const pool = new Pool({
    password: (process.env.DB_PASS),
    user: (process.env.DB_USER ),
    database: (process.env.DB),
    host: (process.env.DB_HOST),
    port: '5432',
    ssl: {rejectUnauthorized:false}
});

module.exports = pool;
