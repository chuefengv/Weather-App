const Pool = require('pg').Pool;

const pool = new Pool({
    password: 'password',
    user: 'feng',
    database: 'uscities',
    host: 'localhost',
    port: '5432'
});

module.exports = pool;