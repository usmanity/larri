const express = require('express');
const router = express.Router();

router.route('/').get(getDashboardHandler).post(postDashboardHandler);

function getDashboardHandler(req, res, next) {
  res.send('This is not implemented');
}

function postDashboardHandler(req, res, next) {
  res.send('This is not implemented');
};

module.exports = router;
