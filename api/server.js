// require("dotenv").config();
const express = require("express");
const app = express();
const routes = require('./routes');
const db = require("./database/db")
const cors = require('cors')

// const User = require("./models/User")

// logging middleware
// app.use(volleyball);

// parsing middleware
app.use(express.json());
app.use(cors())

app.use(express.static("public"));



app.use('/carlitos', (req,res)=>{
  res.json({name:'naza'})
});
app.use('/api', routes);
app.use("/api", (req, res) => {
  res.sendStatus(404);
});

app.use((req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use((err, req, res, next) => {
  console.log("ERROR");
  console.log(err);
  res.status(500).send(err.message);
});

db.sync({ force: false})
  .then(() => {
    app.listen(3001, () =>
      console.log("Server port 3001")
    );
  })
  .catch((err) => console.log(err));

  module.exports = app