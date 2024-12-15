import mongoose from "mongoose";
import { DB_NAME } from "../constant.js"

const connect_DB = async ()=> {
    try {
      const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
     console.log(`DATABASE  CONNECT  AT HOST :  ${connection.connection.host}`)
    } catch (error) {
        console.log("ERROR MONGODM CONNECTION FAILD: " , error)
        throw error
    }
         
}

export default connect_DB