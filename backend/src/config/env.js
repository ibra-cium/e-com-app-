import dotenv from "dotenv" // reads the .env file 
dotenv.config() // makes the process.env 

export const ENV = {
    NODE_ENV : process.env.NODE_ENV,
    PORT : process.env.PORT,
    DB_URL : process.env.DB_URL,
    CLERK_PUBLISHABLE_KEY : process.env.CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY : process.env.CLERK_SECRET_KEY,
    INNGEST__SIGNING_KEY: process.env.INNGEST__SIGNING_KEY,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SEC_KEY: process.env.CLOUDINARY_API_SEC_KEY,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    
};
