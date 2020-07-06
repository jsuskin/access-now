const express = require('express');
const app = express();
const authRoute = require('./routes/auth');
const dotenv = require('dotenv');
const mongoose = require("mongoose");

dotenv.config();

app.set("port", process.env.PORT || 4000);

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB, boo!")
);

app.use(express.json());
app.use('/api/user', authRoute);

app.listen(app.get("port"), console.log("Node app is running on port", app.get("port")));