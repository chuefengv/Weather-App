const express = require('express');
const router = express.Router();
const mysqldb = require('../db');

router.get('/', async (req, res, next)=>{
    let state = req.query.state;

    try{
        let results = await mysqldb.getCities(state);
        results = JSON.parse(JSON.stringify(results));
        res.json(results);
        console.log(results);
    } catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});

module.exports = router;