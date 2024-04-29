import mongoose from'mongoose';
let Schema = mongoose.Schema;  

let UserListingSchema = new Schema({

    userId: String,
    listId:String
}
   );


let UserListing = mongoose.model("UserListing",UserListingSchema);

export default UserListing;