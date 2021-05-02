const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");
// const postRouter = require("./routes/api/post");
// const useRouter = require("./routes/api/user");
const app = express();
var passport = require('passport');
var User = require('./models/user')
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// BodyParser Middleware

app.use(cookieParser());
// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(postRouter);

// app.use(useRouter);
app.use(router);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
