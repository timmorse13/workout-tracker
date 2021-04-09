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
                trim: true,
                required: true
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
    
},
{
    toJSON: { virtuals: true }
}

);

workoutDbSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.duration;
    }, 0);
})

const Workout = mongoose.model("Workout", workoutDbSchema)

module.exports = Workout