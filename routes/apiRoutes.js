// Require our workout models
const Workout = require("../models/workout");
// Require router
const express = require("express");
const router = express.Router();

// Our api routes

    // Get our workouts from workout db
    router.get("/api/workouts", (req, res) => {
        console.log(req.body)
        Workout.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
    });

module.exports = router;