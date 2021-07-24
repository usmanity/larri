const express = require('express');
const router = express.Router();

router.route('/').get(getCreateHandler).post(postCreateHandler);

function getCreateHandler(req, res, next) {
  res.send(`To create a short URL, send your request like:
  - POST /api/v1/create
  - Content-Type: application/json
  - Body: { "url": "https://www.google.com" }
  - Response: { "shortUrl": "/abc123" }`
  );
}

function postCreateHandler(req, res, next) {
  // TODO: implement create short url
  const { url } = req.body;
  const shortUrl = createShortUrl(url);
  res.send({ shortUrl });
};

function createShortUrl(url) {
  return `/abc123`;
}

module.exports = router;
