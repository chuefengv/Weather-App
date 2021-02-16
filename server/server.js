const express = require('express');
const app = express();
const apiRouter = require('./routes'); 
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/api/data', apiRouter);



app.listen(process.env.PORT || '3000', ()=>{
    console.log(`Process is running on port ${process.env.PORT || 3000}`);


})