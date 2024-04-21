import express from "express";
import fun1 from "./connection.js";
import Listing from "./models/listing.js";
import routerOfAuth from "./router/authRouter.js";

fun1();
let app = express();

let port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('dist'));
app.use(express.urlencoded({extended : true})); 


app.use("/api/auth",routerOfAuth);


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






app.get('/api/listOne/:id',(req,res)=>{
    console.log("req recieced");
    

    let {id} = req.params;
   
    // console.log(id)
    Listing.findById(id).then((result)=>{
        
       
        res.send(result);
    });
  
})