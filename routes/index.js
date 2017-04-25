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

router.get('/tweets/:id', function (req, res) {
  //console.log(tweetBank.list());
  res.render('index', {tweets: tweetBank.find({id: +req.params.id})})
})
module.exports = router;
