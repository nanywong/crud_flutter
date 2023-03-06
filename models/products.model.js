const mongoose = require("mongoose"); 

const product = mongoose.model( 
    "products",
    mongoose.Schema( //Criar db
        {
            productName: String,
            productDescription: String,
            productPrice: Number,
            productImage: String,

        }, {
            timestamps: true,
        }
    )
);

module.exports = {
    product
}