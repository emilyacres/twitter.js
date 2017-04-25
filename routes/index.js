const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', {title: 'Twitter', tweets: tweets } );
});

router.use(express.static('public'));

module.exports = router;
