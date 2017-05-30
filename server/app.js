//  requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
/** ---------- REQUIRE CUSTOM APP MODULES ---------- **/
const passport = require('../auth/passport');
const configs = require('../config/auth');
const index = require('../routes/index');
const auth = require('../routes/auth');
const isLoggedIn = require('../utils/auth');
const private = require('../routes/private/index');
const database = require('../utils/database');

//globals
const port = process.env.PORT || 8080;

//uses
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('client'));
/** ---------- DATABASE CONNECTION HANDLING ---------- **/
// db();
/** ---------- SESSION CREATION AND STORAGE ---------- **/
/**
 * Creates session that will be stored in memory.
 * @todo Before deploying to production,
 * configure session store to save to DB instead of memory (default).
 * @see {@link https://www.npmjs.com/package/express-session}
 */
app.use(session({
  secret: configs.sessionVars.secret,
  key: 'user',
  resave: 'true',
  saveUninitialized: false,
  cookie: { maxage: 60000, secure: false },
}));
/** ---------- PASSPORT ---------- **/
app.use(passport.initialize()); // kickstart passport
/**
 * Alters request object to include user object.
 * @see {@link auth/passport}
 */
app.use(passport.session());
/** ---------- ROUTES ---------- **/
app.use('/auth', auth);
app.use('/private', isLoggedIn, private);
app.use('/', index);

//base url hit
app.use('/', function(req, res) {
  res.sendFile(path.resolve('client/views/index.html'));
});

//listening...
app.listen(port, function(){
  console.log('server up on:', port);
});
