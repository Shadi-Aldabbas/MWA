const mongoose = require("mongoose");
const Grade = mongoose.model(process.env.GRADES_MODEL);

const getListOfGrades = (req,res)=>{

    Grade.find().limit(10).exec((err,grades)=>{
        if(err){
            console.log(err);
        } 
        else{
            res.status(200).json(grades);
        }
    })
}
const getOneGrade = (req,res)=>{
    const gradeId = req.params.gradeId;
    Grade.findById(gradeId).exec((err,grade)=>{
        const response ={
            status:200,
            msg:grade
        }
        if(err){

            console.log(err);
            response.status = 500;
            response.msg = err;
        } 
        else if(!grade){
            response.status = 404;
            response.msg = "not found sry";
        }
        res.status(response.status).json(response.msg);
    })
}
const deleteGrade = (req,res)=>{
    const gradeId = req.params.gradeId;
    Grade.findByIdAndDelete(gradeId).exec((err,grade)=>{
        const response ={
            status:204,
            msg:grade
        }
        if(err){

            console.log(err);
            response.status = 500;
            response.msg = err;
        } 
        else if(!grade){
            response.status = 404;
            response.msg = "not found sry";
        }
        res.status(response.status).json(response.msg);
    })
}
module.exports ={
    getListOfGrades,
    getOneGrade,
    deleteGrade
}
