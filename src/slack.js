const SlackBot = require('slackbots');

var bot = null;

const init = (token) => {
    bot = new SlackBot({
        token: token,
        name: 'Tech Follow'
    });
}

const send = (text) => {
    var params = {
        icon_emoji: ':computer:'
    };
    
    bot.postMessageToChannel('tech-follow', text, params);
}

module.exports = { init, send };