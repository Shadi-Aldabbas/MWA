const mongoose = require("mongoose");
const locationSchema = mongoose.Schema({
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
});
module.exports = {
    locationSchema,
};