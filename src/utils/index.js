
const config = require('../../config');
const axios = require('axios');

function genRest(operation, url, headers, data, res, next) {
    config.logger.debug(url)
    axios({
        method: operation,
        url: url,
        data: data,
        headers: headers
    }).then(function (response) {
        next(response.data)
    })
        .catch(function (error) {
            config.logger.error(error)
            return res.status(400).json({"message": "unable to make " + operation + " request to " + url})
        });
}

module.exports.genRest = genRest

function checkNull(item) {
    if (item == null || item === undefined) {
        return true
    }
    return false

}

module.exports.checkNull = checkNull


function validateDict(dict, validator, next) {
    next(validator.validate(dict))
}

module.exports.validateDict = validateDict


function valiationErrConstructor(err) {

    let errors = {}
    for (let k in err) {
        errors[err[k].path] = err[k].message
    }
    return errors
}

module.exports.valiationErrConstructor = valiationErrConstructor


function postValidate(req, res, modelValidate, next) {

    validateDict(req.body, modelValidate, function (err) {
        if (err != null && err.length > 0) {
            return res.status(400).json(valiationErrConstructor(err))
        }
        next()
    });
}

module.exports.postValidate = postValidate
