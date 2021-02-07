// Require our workout models
const { Workout } = require("../models");

// Our api routes
module.exports = function (app) {
    // Get our workouts from workout db
    app.get("/api/workouts", (req, res) => {
        console.log(req.body)
        Workout.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
    });

} 