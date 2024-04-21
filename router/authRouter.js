import  express from "express";

import { signup,login } from "../controller/authController.js";
let routerOfAuth = express.Router();

// routerOfAuth.post("/login",login)

// routerOfAuth.get("/logout",logout)


routerOfAuth.post("/signup",signup)
routerOfAuth.post("/login",login)




export default routerOfAuth;