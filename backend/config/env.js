import dotenv from "dotenv" // reads the .env file 
dotenv.config() // makes the process.env 

export const ENV = {
    NODE_ENV : process.env.NODE_ENV,
    PORT : process.env.PORT,
    DB_URL : process.env.DB_URL
};
