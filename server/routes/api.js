const express = require('express');
const router = express.Router();


/* GET api listing. */
router.get('/', (req, res) => {
  // move toward
  global.mip.driveDistanceByCm(20, 0, function (err) {
    console.log("moving toward");
  });
  res.send('moving toward');
});

module.exports = router;
