const mongoose = require("mongoose");
const { locationSchema } = require("./location");
const jobsSchema = mongoose.Schema({
    title: {
        type: String,
    },
    salary: {
        type: Number,
    },
    location: locationSchema,
    description: {
        type: String,
    },
    experience: {
        type: String,
    },
    skills: [
        String,
    ],
    postDate: {
        type: String,
    },
});
mongoose.model("Job", actorSchema, "jobs");
module.exports = {
    jobsSchema,
};
