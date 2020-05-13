const express = require('express');
const router = express.Router();
const middle = require('../middleware/index');
const config = require('../../config');
const utils = require('../utils/index');


router.get('/', function (req, res) {
    middle.authCheck( req, res, function (err, result) {
      config.logger.debug("Passed auth check")
      let data = {
        text: `Hello, you wrote: "${req.query.text}"`
      }

      utils.genRest(config.methods.post, config.slack.baseUrl + config.slack.token,
        null, data, res, function (result) {
        return res.status(200).json(result)
      });
  });
});

module.exports = router;
