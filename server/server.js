//nodejs

//import the modules
//require() function used to import the modules
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");


//create the rest object
const app = express();
//where "app" is the "rest" object
//where "app" object used to develop the "rest services"


//set the MIME Type
app.use(express.json());


//enable the "ports" communication
//enabling the cors policy
app.use(cors());


//create the mongodb client
//this client helps to connect to mongodb database
const ashokIT = mongodb.MongoClient;
//where "ashokIT" is the client object
//where "ashokIT" object helps to connect to the mongodb database


//create the rest api
app.get("/products",(req,res)=>{
    ashokIT.connect(`mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/mern?retryWrites=true&w=majority`,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("mern");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });
})


//assign the port number
app.listen(8080,()=>{
    console.log("server listening the port number 8080");
});
