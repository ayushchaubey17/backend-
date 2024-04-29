
import express from "express";
import { wishlist ,wishlistOfUSer} from "../controller/wishlistController.js";


let routerOfWishList = express.Router();

routerOfWishList.post(`/:idWishlist/:idUser`,wishlist);
routerOfWishList.get(`/:id`,wishlistOfUSer);

export default routerOfWishList;