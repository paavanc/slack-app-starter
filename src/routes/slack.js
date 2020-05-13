const express = require('express');
const router = express.Router();
const middle = require('../middleware/index');
const config = require('../../config');
const utils = require('../utils/index');
const slackValidate = require('../validators/slack');
const morgan = require('morgan')

router.post('/', morgan('combined', { skip:  function (req, res) {
  middle.authCheck( req, res, function () {
    config.logger.debug("Passed auth check")
  utils.postValidate(req, res, slackValidate, function () {
      config.logger.debug("Passed validation check")
      let data = {
        text: `Hello, you wrote: "${req.body.text}"`
      }
      utils.genRest(config.methods.post, config.slack.baseUrl + config.slack.token,
        null, data, res, function (result) {
        return res.status(200).json(result)
        });
      });
  });
}}));

module.exports = router;
