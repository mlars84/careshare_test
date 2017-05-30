/**
 * Handles all routing for private routes.
 *
 * @module routes/private/index
 */
const express = require('express');
const router  = express.Router();
const calendar = require('./calendar');

/** ---------- SUBROUTES ---------- **/
router.use('/calendar', calendar);

/**
 * GET private/index
 */
router.get('/', function (req, res) {
  res.redirect('/'); // they made it!
});

module.exports = router;
