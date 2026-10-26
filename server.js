require("dotenv").config();

const express = require("express");

const app = express();

const studentRouter = require("./Router/studentRouter");
app.use(express.json());

app.use("/", studentRouter);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});