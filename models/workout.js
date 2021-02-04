const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercise: [
    { 
    type: {
        type: String,
        trim: true,
        required: "Enter in a type of exercise"
        },
    name: {
        type: String,
        trim: true,
        required: "Enter in an exercise"
        },
    duration: {
        type: Number,
        required: "Enter in the duration minutes"
    },
    weight: {
        type: Number,
        required: "Enter in body weight"
    },
    reps: {
        type: Number,
        required: "Enter in number of reps"
    },
    sets: {
        type: Number,
        required: "Enter in number of sets"
    }
    },
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = User;
