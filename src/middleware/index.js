
// TODO: Maybe fill this out with something cleaner?

const utils = require('../utils/index');


function authCheck(req, res, next) {
  if (utils.checkNull(req.webtaskContext)) {
    return res.status(401).json({message: 'Unauthorized message'});
  }
  if (req.query.token !== req.webtaskContext.secrets.verification_token) {
  return res.status(401).json({message: 'Unauthorized token'});
}
  next(true)
};

module.exports.authCheck = authCheck
