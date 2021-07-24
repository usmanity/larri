const express = require('express');
const router = express.Router({mergeParams: true});

router.route('/').get(getInfoHandler).post(postInfoHandler);

function getInfoHandler(req, res, next) {
  console.log(req.params)
  console.log(`Short URL for info: ${req.params.url}`);
  res.send('This is a TODO');
}

function postInfoHandler(req, res, next) {
  res.send('POST method is not supported for this endpoint');
};

module.exports = router;
