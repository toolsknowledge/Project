const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin",
    database:"redux"
});

connection.connect();

app.get("/fetch",(req,res)=>{
    connection.query("select * from products",(err,records,fields)=>{
        if(err) throw err;
        else{
            res.send(records);
        }
    });
});

app.post("/insert",(req,res)=>{
    connection.query(`insert into products values(${req.body.p_id},'${req.body.p_name}',${req.body.p_cost})`,(err,result)=>{
        if(err) throw err;
        else{
            res.send({"insert":"success"})
        }
    });
});

app.put("/update",(req,res)=>{
    connection.query(`update products set p_cost=${req.body.p_cost} where p_id=${req.body.p_id}`,(err,result)=>{
        if(err) throw err;
        else{
            res.send({"update":"success"});
        }
    });
});

app.delete("/delete",(req,res)=>{
    connection.query(`delete from products where p_id=${req.body.p_id}`,(err,result)=>{
        if(err) throw err;
        else{
            res.send({"delete":"success"});
        }
    });
});

app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});









