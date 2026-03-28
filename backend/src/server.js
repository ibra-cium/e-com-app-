import express from "express"
import path from "path"
import { ENV } from "../config/env.js"

const __dirname = path.resolve() // gives the exact location of file path
const app = express()

app.get("/api",(req,res)=>{
    res.status(200).json({message:"success"})
})
if (ENV.NODE_ENV==="production"){
    app.get("/{*any}",(req,res)=>{
        app.use(express.static(path.join(__dirname,"../admin/dist")))
    })
}
app.listen(3000,()=> console.log("server is running"))