const telegram = require(`telegram-bot-api`);
const chat_id = `@TechFollow`;
var api = null;

const init = (token) => {
    api = new telegram({ token });
};

const send = (text) => {
    api.sendMessage({ chat_id, text, parse_mode: `Markdown` });
}

module.exports = { init, send };