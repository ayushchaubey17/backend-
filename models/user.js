import mongoose from'mongoose';
 

let userSchema = mongoose.Schema({
    fname:String,
    mail:String,
    pwd:String,
    cpwd:String,
    age:String,
   

})

let User = mongoose.model("User",userSchema);


export default User;