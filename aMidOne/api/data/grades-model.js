const mongoose = require("mongoose");

const scoresSchema = new mongoose.Schema({
    type:{
        type:String
    },
    scores:{
        type:Number
    },
});
const gradesSchema = new mongoose.Schema({
    student_id:{
        type:Number
    },
    scores:[scoresSchema],
    class_id:{
        type:Number
    }

});
mongoose.model("grades",gradesSchema,"grades");
module.exports ={
    gradesSchema
}