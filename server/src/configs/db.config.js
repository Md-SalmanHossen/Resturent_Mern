import mongoose from "mongoose";

const connectDb=async(req ,res)=>{
   try {
      const conn=await mongoose.connect(process.env.MONGO_URI);
      console.log(`Database connection: ${conn.connection.host}`)
   }catch (error) {
      console.error(`Connection error ${error.message}`);
      process.exit(1);
   }
}
export  default connectDb;