const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');
const PORT = process.env.PORT || 3000;
const db = require('./models');
const { Workout } = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get('/exercise', (req,res)=> {
    res.sendFile(path.join(__dirname, "public/exercise.html"))
});
  
  app.get('/stats', (req,res)=> {
    res.sendFile(path.join(__dirname, "public/stats.html"))
});

app.get('/api/workouts', (req, res) => {
    db.Workout.find({})
    .then(workoutDb => {
        res.json(workoutDb);
    }) .catch (err => {
        res.json(err);
    })
});

app.post('/api/workouts', (req, res) => {
    Workout.create({})
    .then(workoutDb => {
        res.json(workoutDb);
    })
    .catch(err => {
        res.json(err);
    })
});



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });