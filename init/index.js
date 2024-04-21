import mongoose from 'mongoose';
import initData from './data.js';
import Listing from "../models/listing.js";




async function main() {
    await mongoose.connect('mongodb+srv://ayushreso1234:Ayush123@cluster1.ab9wxlf.mongodb.net/myListing?retryWrites=true&w=majority&appName=Cluster1');
}
main().then(
    ()=>{console.log("success")}
).catch(
    ()=>{console.log("err")}
);


let initDb = async()=>{

    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data saved");
}

initDb();