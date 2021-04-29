const router = require("express").Router();
// Register User
router.post('/api/signup', function(req, res){
    var password = req.body.password;
    var password2 = req.body.password2;
  
    if (password == password2){
      var newUser = new User({
        name: req.body.name,
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

  // Endpoint to login
router.post("/api/login", passport.authenticate("local"), (req, res) => {
  const loginUser = {
    email: req.body.email,
    password: req.body.password,
  };
  res.send(loginUser);
  console.log(loginUser, " authenticated");
});

// Endpoint to get current user
router.get("/api/user", isAuthenticated, (req, res) => {
  if (!req.user) {
    res.json({});
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
app.get("/logout", (req, res) => {
  req.logout();
  res.send(null);
});
