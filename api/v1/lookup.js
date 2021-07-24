const express = require('express');
const router = express.Router();

router.route('/').get(getLookupHandler).post(postLookupHandler);

function getLookupHandler(req, res, next) {
  res.send('This is not implemented');
}

function postLookupHandler(req, res, next) {
  res.send('This is not implemented');
};

module.exports = router;
