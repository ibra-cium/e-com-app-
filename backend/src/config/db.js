import mongoose from "mongoose"
import { ENV } from "./env.js"
export const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(ENV.DB_URL);
        console.log("Connected");
    } catch(e){
        console.error("error happened")
        process.exit(1);
    }
}