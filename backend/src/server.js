import express from "express"
import path from "path"
import { ENV } from "../config/env.js"
import { connectDB } from "../config/db.js"
import { clerkMiddleware } from '@clerk/express'

const __dirname = path.resolve() // gives the exact location of file path

const app = express()

app.use(clerkMiddleware()) // req.auth --> adds auth object under the req -> req.auth 

app.get("/api",(req,res)=>{
    res.status(200).json({message:"success"})
})
if (ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../admin/dist")))
    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname,"../admin/dist"))
    })
}
const startServer = async ()=>{
    await connectDB();
    app.listen(ENV.PORT,()=>{
        console.log("Server running!");
    })
}
startServer();
