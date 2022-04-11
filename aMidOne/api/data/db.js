const mongoose = require("mongoose");
require("./grades-model");

mongoose.connect(process.env.DB_URL),{
    useNewUrlParser:true,
    iseUnifiedTopology:true,
}