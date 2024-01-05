const express =  require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

app.listen(8080, ()=> {
    console.log("Listening");
}) 

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password:'',
    port: '3307',
    database: 'sportsclub'
})


app.get("/sport", (re, res)=> {
    const sql = "SELECT * FROM sport;"
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get("/coach", (re, res)=> {
    const sql = "SELECT * FROM coach;"
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get("/athlete", (re, res)=> {
    const sql = "SELECT * FROM athlete;"
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})


