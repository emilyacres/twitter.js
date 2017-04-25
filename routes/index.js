const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', {title: 'Twitter', tweets: tweets } );
});

router.use(express.static('public'));

router.get('/users/:name', function (req, res) {
  res.render( 'index', {tweets: tweetBank.find({name: req.params.name})});
});

module.exports = router;
