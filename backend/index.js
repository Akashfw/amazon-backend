const express = require("express");
require("dotenv").config();
const app=express();
app.use(express.json());
const {connection}=require("./config/db");
const {userroute} = require("./routes/user_route");
const {authenticate}= require("./middelware/authenticate_middleware")
const cors= require("cors");


app.get("/", async (req,res)=>{
    res.send("Welcome to Home Page")
});
app.use(cors());
app.use("/users",userroute);

app.use(authenticate);


app.listen(process.env.port, async ()=>{
    try {
        await connection;
        console.log("connected to DB")
    } catch (err) {
        console.log("unable to connect to DB")
        console.log(err);
        
    }
    console.log("port is running at 8080")
})