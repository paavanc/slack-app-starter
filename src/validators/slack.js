const config = require('../../config');

import Schema from 'validate'


const slack = new Schema({
    text: {
      type: String,
      required: true,
    },
    token: {
        type: String,
        required: true,
    }
})

module.exports = slack
