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

config.slack.baseUrl = process.env.SLACK_URL ? process.env.SLACK_URL : 'https://hooks.slack.com/services/';
config.slack.token = process.env.SLACK_TOKEN ? process.env.SLACK_TOKEN : 'Dont Know';
config.slack.verificationToken = process.env.SLACK_VERIFICATON_TOKEN ? process.env.SLACK_VERIFICATON_TOKEN : 'Dont Know';
config.slack.subUrls = {}
config.slack.subUrls.postMessage = "chat.postMessage"

config.debugMode = process.env.IS_PROD ? false: true;

module.exports = config;
