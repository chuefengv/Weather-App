const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db/index')

app.use(cors()); 
app.use(express.json());

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static(path_join(__dirname, 'client/build')))
// }

app.get("/", async(req, res)=>{
    // const state = req.query.state;
    // try{
    //     const getCity = await pool.query("SELECT city, id FROM uscities WHERE state_name='Massachusetts' ORDER BY city");
    //     res.json(getCity.rows)
    // }catch(err){
    //     console.log(err.message)
    // }
    res.send('hello world')
})

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Process is running on port ${process.env.PORT || 5000}`)

})