// Require our workout models
const Workout = require("../models/workout");

// Our api routes
module.exports = function (app) {
    // Get our last workout from workout db
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
        .then((data) => {
            console.log("Get Last Workout", data);
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
    });

    // Get our workouts for range, limited to 7 days
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({}).limit(7)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
    });

    // Create our workout 
    app.post("/api/workouts", ({ body }, res) => {
        console.log(body)
        Workout.create(body)
          .then((data) => {
              console.log("Post route", data)
            res.json(data);
          })
          .catch((err) => {
            res.json(err);
          });
      });

    // Putting in individual data
    app.put("/api/workouts/:id", ({ params, body }, res) => {
        console.log("PARAMS", body, params);
        Workout.findByIdAndUpdate(
           params.id,
          { $push: { exercises: body } },
          { new: true }
        )
          .then((data) => {
            res.json(data);
          })
          .catch((err) => {
            res.json(err);
          });
      });
};