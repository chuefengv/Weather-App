const Pool = require('pg').Pool;

const pool = new Pool({
    password: (process.env.DB_PASS || '46a15438110934967ab8afa2c346428dfcaa26a40b3cf0abc13ccdf748d7141b'),
    user: (process.env.DB_USER || 'vsrvwhlczuhayc'),
    database: (process.env.DB || 'd617u788n94tn'),
    host: (process.env.DB_HOST || 'ec2-52-71-231-37.compute-1.amazonaws.com'),
    port: '5432',
    ssl: {rejectUnauthorized:false}
});

module.exports = pool;

