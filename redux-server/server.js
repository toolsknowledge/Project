const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const ashokIT = mongodb.MongoClient;

app.get("/products",(req,res)=>{
    ashokIT.connect("mongodb+srv://qwerty:admin@reduxtest.xw1gu.mongodb.net/redux?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("redux");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    });
});


app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});

