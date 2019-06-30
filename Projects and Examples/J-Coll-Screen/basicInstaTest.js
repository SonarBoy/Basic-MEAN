/*var passport = require('passport-instagram')

passport.use(new InstagramStrategy({
    clientID:"Swoleus959@gmail.com",
    clientSecret: "x73154jy",
    callbackURL:"http://127.0.0.1:3000/auth/instagram/callback"
},
function(accessToken,refreshToken,profile,done){
    User.findOrCreate({instagramId: profile.id},
        function(error,user){
            return done(error,user);
        });
    }
)); */

var passport = require('passport');

var Instagram = require('passport-instagram');
const InstagramStrategy = Instagram.Strategy;

console.log("Est");

passport.use(new InstagramStrategy({
    clientID: "Swoleus959@gmail.com",
    clientSecret: "x73154jy",
    callbackURL: "http://127.0.0.1:4000/auth/instagram/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ instagramId: profile.id }, function (err, user) {
        console.log(user);
        console.log(err);
        return done(err, user);
      

    });
  }
));