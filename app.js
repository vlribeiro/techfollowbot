const telegram = require('telegram-bot-api');
const Watcher = require(`rss-watcher`);
require('dotenv').config();

const channel = `@techmeme`;
const feed = `https://www.techmeme.com/feed.xml`;

const api = new telegram({
    token: process.env.BOT_TOKEN,
    updates: {
        enabled: true
    }
});

console.log(api.getMe());

api.sendMessage({
    chat_id: channel,
    text: `Meu primeiro teste`
})

api
    .on(`message`, (message) => {
        api.sendMessage({
            chat_id: channel,
            text: message.text ? message.text : `Sem texto...`
        })
    });


const watcher = new Watcher(feed);

watcher.on(`new article`, (article) => {
    console.log(article);
    api.sendMessage({
        chat_id: channel,
        text: `Atualizou!`
    });
})