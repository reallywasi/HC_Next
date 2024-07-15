import { error } from "console";
import mongoose from "mongoose";
export async function connect(){

    try{
mongoose.connect(process.env.MONGO_URI!)
const connection=mongoose.connection;

connection.on('connected',()=>{
console.log("mongo db connected succesfully")
})
connection.on('error',(error)=>{
console.log("mongo db connection error"+error)
})

    }catch(error)
    {
console.log('something  went wrong',error)
    }
}