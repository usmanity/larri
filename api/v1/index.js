const express = require('express');
const router = express.Router();

router.use('/create', require('./create'));
router.use('/me', require('./dashboard'));
// creates routes for the following
// /settigns
// /info/:url
// /:url
router.use('/settings', require('./settings'));
router.use('/info/:url', require('./info'));
router.use('/:url', require('./lookup'));

module.exports = router;
