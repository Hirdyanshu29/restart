import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import path from 'path'
import fs from 'fs'
import 'dotenv/config'
import cors from 'cors'

// Creating Server

const app = express();
const PORT = process.env.PORT || 8080;


// Connecting MongoDB 

const MONGO_URL = process.env.Mongo_URL || "mongodb+srv://karan:1234@cluster0.cerk6pe.mongodb.net/devtown?retryWrites=true&w=majority";

main()
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}


// Middlewares

app.get("/",(req,res)=>{
    res.send("working")
})


// Listening Server

app.listen(PORT, () => {
    console.log(`server is working at http://localhost:${PORT}`)
})
