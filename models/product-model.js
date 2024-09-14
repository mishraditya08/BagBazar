const mongoose= require("mongoose");


const productSchema = mongoose.Schema({
    image: String,
    name: StorageManager,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: StorageManager,
    panelcolor: String,
    textcolor: String,
    
});

module.exports= mongoose.model("user", productSchema);