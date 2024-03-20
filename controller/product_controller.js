const Product = require('../models/product_schema');

// function to show all the products
module.exports.getdata =  async function(req, res){
    try {
        const product =await Product.find({});
        return res.status(200).json({
            product,
            message:"sucess",
            sucess:true
    
    
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            sucess:false,
            message:'unable to get product details'
        })
        
    }

}

// function to create a new products
module.exports.create = async function(req, res){
    try {
        const newProduct = await  Product.create(req.body);
        return res.status(200).json({
            newProduct,
            sucess:true
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            sucess:false,
            message:"unable to create product"
        })
        
    }


    
}

// function to delete a product using it's ID
module.exports.delete = async function(req, res){
    try {
        await Product.findByIdAndDelete(req.params.productId)
        return res.status(200).json({
            message:"Product is sucessfully deleted",
            sucess:true
        })
    } catch (error) {
        return res.status(400).json({
            sucess:false,
            message:"unable to delete product"
        })
        
    }

}




// // function to update a products quantity
module.exports.updateQuantity = async function (req, res) {
    try {
        console.log(req.query,req.params)
        const Id = req.params.productId;
        // now , find the product by ID
        let found = await Product.findById(Id)
        //  To increment the quantity of the product put number as a positive value in the query 
        //    and to decrement the quantity put the number as negative value in the query
        if (found) {
    
            const newQuantity = parseInt(found.quantity) + parseInt(req.query.number);
            //  update the product Quantity
            let updatedProduct = await Product.findByIdAndUpdate(Id, { quantity: newQuantity })
            if (updatedProduct) {
                updatedProduct.quantity = newQuantity;
                return res.status(200).json({
                    product: updatedProduct,
                    message: 'updated sucessfully Done'
                });
            }
        }
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            sucess:false,
            message:"unable to update product"
        })
        
    }



}
