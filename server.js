const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db/index')

app.use(cors()); 
app.use(express.json());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); 
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTION");

//     next();
//   });

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

app.get('/api/data', async(req, res)=>{
    const state = req.query.state;
    try{
        const getCity = await pool.query("SELECT city, id FROM uscities WHERE state_name=($1) ORDER BY city",[state]);
        res.json(getCity.rows)
    }catch(err){
        console.log(err.message)
    }
})

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Process is running on port ${process.env.PORT || 5000} LETS GO!`)

})