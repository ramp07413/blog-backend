import mongoose from "mongoose";
import { config } from "dotenv";
config()

export const connectDB =async ()=>{
    try{

    
   const data = await mongoose.connect(process.env.MONGO_DB_URI, {
        dbName : "blog",
    })

    if(!data){
        console.log("data base url is invalid")
    }

    console.log("database connected successfully !")

}
catch(err){
    console.error(err.message)
    console.log("failed to connect database !")
    process.exit(1)
}


}