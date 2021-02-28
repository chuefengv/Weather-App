const mysql = require('mysql');

const conn = mysql.createPool({
    password: 'password',
    user: 'root',
    database: 'state_city',
    host: 'localhost',
    port: '3306'
})

let mysqldb = {};

mysqldb.getCities = (state) =>{
    return new Promise((resolve, reject) =>{
        conn.query("SELECT city, id FROM uscities WHERE state_name=? ORDER BY city", [state], (err, results)=>{
            if(err){
                return console.log(err);
            }else{
                console.log("queried succesful " + state);
                console.log(results); 
                return resolve(results);
            }
        })
    });
}

module.exports = mysqldb;