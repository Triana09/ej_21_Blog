require("dotenv").config();

// bcrypt
const bcrypt = require("bcryptjs");

// User
const { User } = require("./models");
// passportjs
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
// fin passportjs

const express = require("express");
const routes = require("./routes");
const dbInitialSetup = require("./dbInitialSetup");
const req = require("express/lib/request");
const res = require("express/lib/response");
const APP_PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// dbInitialSetup(); // Crea tablas e inserta datos de prueba.

// crear url api

app.listen(APP_PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${APP_PORT}.\n`);
});

// midleware passportjs
app.use(session({ secret: "Equipo8", resave: false, saveUninitialized: false }));
app.use(passport.session());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async function (email, password, cb) {
      const user = await User.findOne({ where: { email: email }, raw: true });

      if (user) {
        const compare = await bcrypt.compare(password, user.password);

        if (compare) {
          return cb(null, user);
        } else {
          return cb(null, false);
        }
      } else {
        return cb(null, false);
      }
    },
  ),
);

passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(async function (id, cb) {
  const loggedUser = await User.findByPk(id);
  if (loggedUser) {
    cb(null, loggedUser);
  } else {
    cb(error, loggedUser);
  }
});

routes(app);
