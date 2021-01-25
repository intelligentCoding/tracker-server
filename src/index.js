const express = require("express");
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(authRoutes);
const mongoUri = 'mongodb+srv://adminTracker:lahore$U4@cluster0.zjv87.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
})

mongoose.connection.on('connected', ()=>{
  console.log("Connected to Mongo Instance")
})

mongoose.connection.on('error', (err)=>{
  console.log('error connecting to mongo', err);
})
app.get("/", (req, res) => {
  res.send("Hi there");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});


// mongodb+srv://adminTracker:<password>@cluster0.zjv87.mongodb.net/<dbname>?retryWrites=true&w=majority