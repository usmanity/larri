const express = require('express');
const router = express.Router();

router.route('/').get(getSettingsHandler).post(postSettingsHandler);

function getSettingsHandler(req, res, next) {
  res.send('you"re in the Settings ');
}

function postSettingsHandler(req, res, next) {
  res.send('hello');
};

module.exports = router;
