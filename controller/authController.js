import User from "../models/user.js";

export let signup =async (req,resp)=>{
// console.log(req.body)
let {fname,mail,pwd,cpwd,age} = req.body;


let oldUser = await User.findOne({mail});

if(oldUser){
console.log("user already exist");
resp.redirect("/login");
}else{

    let user1 = new User({fname,mail,pwd,cpwd,age});
    user1.save()
    .then(
        (res)=>{
            console.log(res);
            resp.redirect('/login')
    }
);

}
}


export let login = async(req,res)=>{
    console.log(req.body);
    

    let {mail,pwd }= req.body;
    let newLoginUser = User.findOne({mail});

    if(newLoginUser){
        User.findOne({mail}).then((resu)=>{
            console.log(resu)
            if(resu.pwd === pwd){
                res.redirect(`/loginUser/${resu._id}`)
            }
            else{
                res.send("password wrong")
            }
        });
    }
    else{
        res.send('neew user');

    }
}