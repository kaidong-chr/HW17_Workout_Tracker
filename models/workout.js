const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercise: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter in a type of exercise",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter in an exercise",
        },
        duration: {
          type: Number,
          required: "Enter in the duration minutes",
        },
        weight: {
          type: Number,
          required: "Enter in body weight",
        },
        reps: {
          type: Number,
          required: "Enter in number of reps",
        },
        sets: {
          type: Number,
          required: "Enter in number of sets",
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    console.log(total, exercise);
    return total + exercise.duration;
  }, 0);
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
