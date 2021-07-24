const express = require('express');
const router = express.Router();

router.route('/').get(getLookupHandler).post(postLookupHandler);

function getLookupHandler(req, res, next) {
  res.send('you"re in the Lookup ');
}

function postLookupHandler(req, res, next) {
  res.send('hello');
};

module.exports = router;
