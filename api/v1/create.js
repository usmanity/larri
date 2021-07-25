const express = require('express');
const router = express.Router();

// router.use(express.urlencoded());
router.use(express.json());

const OUTPUT_LENGTH = require('./output_length.js').output_length();
const crypto = require('crypto');

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
  const { url } = req.body;
  const shortUrl = createShortUrl(url);
  if (url.includes('usman.xyz')) {
    res.status(400).send({
      error: 'URL cannot be from usman.xyz'
    });
  } else {
    res.send({ 
      shortUrl,
      full_url: url,
      more_info: `https://s.usman.xyz/${shortUrl}+`
    });
  }
};

function createShortUrl(url) {
  console.log(url);
  const hash = crypto.createHash('sha1');
  hash.update(url);
  const shortUrl = hash.digest('hex');
  return shortUrl.substring(0, OUTPUT_LENGTH);  
}

module.exports = router;
