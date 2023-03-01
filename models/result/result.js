const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
    {
        year: {
            type: String,
        },
        class: {
            type: String,
        },
        roll: {
            type: String,
        },
        Bangla: {
            type: Number,
        },
        English: {
            type: Number,
        },
        Math: {
            type: Number,
        },
        Name: {
            type: String,
        },
        Science: {
            type: Number,
        },
        Islam: {
            type: Number,
        },
        BangladeshAndGlobal: {
            type: Number,
        },
        InformationTechnology: {
            type: Number,
        },
    },
    {
        timestamps: true,
    }
);

const Result = mongoose.model("Result", authSchema);

module.exports = Result;
