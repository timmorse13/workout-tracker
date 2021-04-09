const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutDbSchema = new Schema({
    
    day: {
        type: Date,
        default: Date.now
    },
    exercises:[
        {
            type: {
                type: String,
                trim: true
            },
            name: {
                type: String,
                trim: true
            },
            duration: {
                type: Number,
                required: true
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
]
    
})