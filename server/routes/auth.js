import express from "express";
import fetch from "node-fetch";
import stripe from "stripe";
import bcrypt from "bcrypt";
const router = express.Router();

import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

// Authentication Server Routes

// passport middle ware runs when the '/login' endpoint is called
passport.use(
  // creates local strategy constructor for passport to authenticate user
  new LocalStrategy(
    // usernameField => tells passport to look for username in 'emailAddress' in User object
    // passwordField => tells passport to look for password in 'password' in User object
    {
      usernameField: "emailAddress",
      passwordField: "password",
    },
    // function call from passport receives username and password from inputs on front end
    function (username, password, done) {
      console.log("passport is trying to verify user", username);
      // calls User model controller and finds user by email and compares 'usernameField' and 'passwordField' with User object
      findUserByEmail(username)
        .then((user) => {
          console.log("storedPassword", user.password);
          console.log("inputPassword", password);
          bcrypt.compare(password, user.password, function (err, result) {
            console.log("result", result);
            if (!user || !result) {
              done(null, false, {
                message: "Incorrect username/password.",
              });
              return;
            }
            console.log("user", user);
            done(null, user);
          });
        })
        .catch(done);
    }
  )
);

// passport middle ware creates a cookie and saves it in the browser
passport.serializeUser(function (user, done) {
  console.log("passport wants to store this user in a cookie", user);
  done(null, user.id);
});
// passport middle ware checks if there is a cookie saved in the browser and returns logged in user
passport.deserializeUser(function (id, done) {
  // console.log('passport is trying to recover the user from a cookie')
  findUserById(id)
    .then((user) => {
      if (!user) {
        done(new Error("email not found or it was deleted"));
        return;
      }
      done(null, user);
    })
    .catch(done);
});

// POST Endpoint || login endpoint, uses the passport middle above, to authenticate if username and password from log in matches user in database
router.post(
  "/login",
  passport.authenticate("local"),
  async function (req, res) {
    console.log("This is req.user", req.user);
    res.send(req.user);
  }
);

// GET endpoint || endpoint logs out user
router.get("/logout", function (req, res) {
  console.log("get server logout");
  req.logout();
  res.redirect("/");
});

export default router;
