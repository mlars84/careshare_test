/**
 * Provides basic route for providing initial package
 * to client.
 *
 * @module routes/index
 */
const express = require('express');
const router = express.Router();
const path = require('path');
/**
 * GET /
 *
 * Send client the top-level index.html page.
 * @return index.html
 */
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/views/index.html'));
});

module.exports = router;
