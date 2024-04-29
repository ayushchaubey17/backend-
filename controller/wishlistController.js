import User from "../models/user.js";
import UserWishList from "../models/userListing.js";
export let wishlist = (req,res)=>{
    let {idWishlist} = req.params;
    let {idUser} = req.params;

   let preUser = UserWishList.findOne({userId:idUser}).then(
   async (userExis)=>{
        console.log(userExis);
        let oldArr = [... new Set(userExis.itemsId)];
   let newRew =   await  UserWishList.findByIdAndUpdate(userExis.id,{itemsId:([...oldArr,idWishlist])}
    ,{new:true});
console.log(userExis);

    }
   ).catch();

   if(!preUser){
        let user1 = new UserWishList({userId:idUser,itemsId:[...itemsId,idWishlist]});
        user1.save().then((resu)=>{
            console.log(resu)
        })
   }

    res.send("data");
}


export let wishlistOfUSer =(req,res)=>{
    console.log(req.params);
    let {id} = req.params;
    
    UserWishList.findOne({userId:id}).then(
        (result)=>{
               res.send(result);
        }
    )
    .catch();
}