const express = require("express");
require("dotenv").config();

const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requireAuth');

const app = express();
app.use(express.json()); //Used to parse JSON bodies

app.use(authRoutes);
app.use(trackRoutes);


const mongoUri = 'MONGO_URI'
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
app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});


// mongodb+srv://adminTracker:<password>@cluster0.zjv87.mongodb.net/<dbname>?retryWrites=true&w=majority
