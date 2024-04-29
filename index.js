import express from "express";
import fun1 from "./connection.js";
import Listing from "./models/listing.js";
import User from "./models/user.js";
import routerOfAuth from "./router/authRouter.js";
import routerOfWishList from "./router/wishListRouter.js";
import Review from "./models/review.js";
import UserListing from "./models/userAndListing.js";

fun1();
let app = express();

let port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('dist'));
app.use(express.urlencoded({extended : true})); 


app.use("/api/auth",routerOfAuth);

app.use("/api/wishlist",routerOfWishList)


app.listen(port,()=>{
    console.log("listening");
})


app.get('/api/lists',(req,res)=>{
    // res.send("hy");
    Listing.find().then((result)=>{
        let [ar1] = result;
        res.send(result);
    });
  
})


app.post('/api/review',(req,res)=>{
   console.log(req.body);
  
  let {name,email,review} = req.body;
let newUser = new Review({name,email,review,time:new Date()});
newUser.save().then((result)=>{
    console.log(result)
});
res.redirect('/#/review')
})



app.get('/api/review/get',(req,res)=>{
    Review.find({}).then((resu)=>{
        console.log("req recieved")
        console.log(resu);
        res.send(resu);
    })
})


app.post('/api/listing/:userid',(req,res)=>{
    console.log("req recieved")

    let {userid}=req.params;
    let {title,description,price,location,country,image} = req.body;

    console.log(userid,title,description,price,location,country,image)
    let newOne = new Listing({title,description,price,location,country,image});
    newOne.save().then((result)=>{
        console.log(result);

        let ual = new UserListing({userId:userid,listId:result._id});
        ual.save().then((newREs)=>{
            console.log(newREs);
            res.redirect(`/#/loginUser/${userid}`);
        })

        
    });







})


app.get('/api/listOne/:id',(req,res)=>{
    let {id} = req.params;
    Listing.findById(id).then((result)=>{
       console.log(result)
        res.send(result);
    });
  
})


app.get('/api/user/:id',(req,res)=>{
    // res.send("hy");
    let {id} = req.params;
    User.findById(id).then((result)=>{
        // let {obj1} = result;
        res.send(result);
        console.log(result)
    });
  
})




