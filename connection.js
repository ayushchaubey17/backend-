import mongoose from "mongoose";

let fun1 = async ()=>{
    mongoose.connect('mongodb+srv://ayushreso1234:Ayush123@cluster1.ab9wxlf.mongodb.net/myListing?retryWrites=true&w=majority&appName=Cluster1').then(()=>{
        console.log("connected")
    }).catch((err)=>{
        console.log("rejected",err)
    });
}

export default fun1;