const express = require('express');
const router = express.Router();

router.route('/').get(getInfoHandler).post(postInfoHandler);

function getInfoHandler(req, res, next) {
  console.log(req.params)
  res.send(`here's ${req.params.url}`);
}

function postInfoHandler(req, res, next) {
  res.send('hello');
};

module.exports = router;
