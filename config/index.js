const log4js = require('log4js');
const logger = log4js.getLogger();
const config = {};
config.methods = {};
config.slack = {}
logger.level = process.env.LOG_LVL ? process.env.LOG_LVL : 'debug';
config.logger = logger;

config.methods.post = 'post'
config.methods.get = 'get'
config.methods.delete = 'delete'
config.methods.put = 'put'
config.methods.patch = 'patch'

config.slack.baseUrl = process.env.SLACK_URL ? process.env.SLACK_URL : 'https://slack.com/api/';
config.slack.subUrls = {}
config.slack.subUrls.postMessage = "chat.postMessage"


module.exports = config;
