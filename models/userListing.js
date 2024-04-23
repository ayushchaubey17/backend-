import mongoose from'mongoose';
 

let userListSchema = mongoose.Schema({
    userId:String,
    mail:String,
    itemsId:[String]

})

let UserWishList = mongoose.model("UserWishList",userListSchema);


export default UserWishList;