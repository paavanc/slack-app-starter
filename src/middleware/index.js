
// TODO: Maybe fill this out with something cleaner?

const utils = require('../utils/index');
const config = require('../../config');


function authCheck(req, res, next) {
  if (utils.checkNull(req.body.token) ||  req.body.token !== config.slack.verificationToken) {
  return res.status(401).json({message: 'Unauthorized token'});
}
  next()
};

module.exports.authCheck = authCheck
