const express = require('express');
const router = express.Router();
const middle = require('../middleware/index');
const config = require('../../config');
const utils = require('../utils/index');
const slackValidate = require('../validators/slack');

router.post('/', function (req, res) {
  //config.logger.debug(req.body)
  middle.authCheck( req, res, function () {
    config.logger.debug("Passed auth check")
  utils.postValidate(req, res, slackValidate, function () {
      config.logger.debug("Passed validation check")
      let responseText = utils.checkForUser(req.body.text)
      let data = {
        text: `Hello, you wrote: ${responseText}`,
      }
      utils.genRest(config.methods.post, config.slack.baseUrl + config.slack.token,
        null, data, res, function (result) {
        return res.status(200).json(result)
        });
      });
  });
});

module.exports = router;
