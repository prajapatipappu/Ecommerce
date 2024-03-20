const express = require('express');
const passport=require('passport')
const router = express.Router();

//initializing products controller
const productsController = require('../controller/product_controller');

// To get all the products
router.get('/',productsController.getdata);

// To create a product
router.post('/create', passport.authenticate("jwt",{session:false}),productsController.create);

// To delete a product using its ID
 router.delete('/:productId',passport.authenticate('jwt',{session:false}), productsController.delete);

// To update the Quantity of a product
router.post('/:productId/updatequantity/',passport.authenticate('jwt',{session:false}),productsController.updateQuantity);

module.exports = router;