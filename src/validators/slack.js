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
    },
    team_id: {
        type: String,
    },
    team_domain: {
        type: String,
    },
    channel_id: {
        type: String,
    },
    user_id: {
        type: String,
    },
    user_name: {
        type: String,
    },
    command: {
        type: String,
    },
    response_url: {
        type: String,
    },
    trigger_id: {
        type: String,
    }
})

module.exports = slack
