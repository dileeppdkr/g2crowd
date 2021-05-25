var express = require('express');
var router = express.Router();
const voting = require('../controllers/voting')


/* GET home page. */

router.get('/', async function(req, res, next) {
  const g2crowds = await voting.getG2Crowd();
  res.render('index', { g2crowds: g2crowds });
});

router.post('/likes/act', async (req, res, next) => {
  const action = req.body.action;
  const name = req.body.name;
  // const counter = action === 'Like' ? 1 : -1;
  const result = await voting.addOrUpdateLikes(name)
  res.send('');
});

module.exports = router;
