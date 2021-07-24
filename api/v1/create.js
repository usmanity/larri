const express = require('express');
const router = express.Router();

router.route('/').get(getCreateHandler).post(postCreateHandler);

function getCreateHandler(req, res, next) {
  res.send('hello');
}

function postCreateHandler(req, res, next) {
  res.send('hello');
};

module.exports = router;
