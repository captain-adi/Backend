import connect_DB from "./db/index.js";
import dotenv from "dotenv";





dotenv.config({
    path:'./env'
})

connect_DB();





// import mongoose from "mongoose";
// import { DB_NAME } from "./constant";
// import express from 'express'

// ( async ()=>{
// try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
   
//     app.on("error", (error)=>{
//           console.log("ERROR:" , error)
//           throw error
//     })
// } catch (error) {
//     console.log("ERROR : ", error);

// }
// })()