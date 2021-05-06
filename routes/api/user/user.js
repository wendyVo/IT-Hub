const passport = require("../../../config/passport");
const router = require("express").Router();
const isAuthenticated = require("../../../config/isAuthenticated");
const User = require("../../../models/user");
// Register User
router.post('/signup', function(req, res){
  console.log("Signup route", req.body)
    var password = req.body.password;
    var password2 = req.body.password2;
  
    if (password == password2){
      var newUser = new User({
        name: req.body.username,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      });
  
      User.createUser(newUser, function(err, user){
        if(err) throw err;
        res.send(user).end()
      });
    } else{
      res.status(500).send("{errors: \"Passwords don't match\"}").end()
    }
  });

    // //if too many errors, display errors
    // if(errors.length > 0) {
    //   res.render("signup", {
    //     errors,
    //     name,
    //     email,
    //     password,
    //     password2
    //   });
    // } else {
    //   //Validation passed
    //   User.findOne({ email: email})
    //     .then(user => {
    //       if(user) {
    //         //Users exists
    //         errors.push({ msg: "Email is already registered! "})
    //         res.render("signup", {
    //           errors,
    //           name,
    //           email,
    //           password,
    //           password2
    //         });
    //       } else {
    //         const newUser = new User({
    //           name: req.body.name,
    //           email: req.body.email,
    //           username: req.body.username,
    //           password: req.body.password
    //         });
    //         User.createUser(newUser, function(err, user){
    //           if(err) throw err;
    //           res.send(user).end()
    //         });
    //       }
    //     })
    // }
  



  // Endpoint to login
router.post("/login", passport.authenticate("local"), (req, res) => {
  const loginUser = {
    email: req.body.email,
    // password: req.body.password,
  };
  res.send(loginUser);
  console.log(loginUser, " authenticated");
});

// Endpoint to get current user
router.get("/", isAuthenticated, (req, res) => {
  if (!req.user) {
    res.json({
      error:"User not found"
    });
  } else {
    User.findById({ _id: req.user.id })
      .populate("images")
      .then((data) => {
        res.json(data);
      });
    console.log("res on server", req.user);
    // res.json(req.user);
  }
});

// Endpoint to logout
router.get("/logout", (req, res) => {
  req.logout();
  res.send(null);
});

module.exports = router;
