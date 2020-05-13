
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
