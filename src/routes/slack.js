const express = require('express');
const router = express.Router();
const middle = require('../middleware/index');
const config = require('../../config');
const utils = require('../utils/index');


router.get('/', function (req, res) {
    middle.authCheck( req, res, function (err, result) {
      config.logger.debug("Passed auth check")
      let data = {
        text: `Hello, you wrote: "${req.query.text}"`,
          channel: req.query.channel_id
      }
      let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + req.webtaskContext.secrets.token
      }
      utils.genRest(config.methods.post, config.slack.baseUrl + config.country.subUrls.postMessage,
        headers, data, res, function (result) {
        return res.status(200).json(result.RestResponse.result)
      });
  });
});

module.exports = router;
