const express = require('express');
const router = express.Router();

router.route('/').get(getDashboardHandler).post(postDashboardHandler);

function getDashboardHandler(req, res, next) {
  res.send('you"re in the Dashboard ');
}

function postDashboardHandler(req, res, next) {
  res.send('hello');
};

module.exports = router;
