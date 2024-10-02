import mongoose from "mongoose";

const connectDb =async()=>{
    const dbName = "Gestion-stock-Project"
    const url=`mongodb+srv://sabrinebouchiha:ugaqOPCxqFRqwrlx@cluster0.rjo6k.mongodb.net/${dbName}`;
    await mongoose.connect(url)
    console.log("data base connected");
    
}

export default connectDb;