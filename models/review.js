import mongoose from'mongoose';
 

let reviewSchema = mongoose.Schema({
    name:String,
    email:String,
    review:String,
    time:Date
})

let Review = mongoose.model("Review",reviewSchema);


export default Review;