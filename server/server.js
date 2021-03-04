const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db/index')

app.use(cors()); 
app.use(express.json());

//Routes
app.get("/api/data", async(req, res)=>{
    const state = req.query.state;
    // console.log(req.query.state);
    try{
        const getCity = await pool.query("SELECT city, id FROM uscities WHERE state_name=($1) ORDER BY city", [state]);
        res.json(getCity.rows);
    }catch(err){
        console.err(err.message);
    }
})

app.listen(5000, ()=>{
    console.log(`Process is running on port 5000`);

})