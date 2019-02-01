const telegram = require('telegram-bot-api');
const Watcher = require(`rss-watcher`);
require('dotenv').config();

const channel = `@techmeme`;
const feed = `https://www.techmeme.com/feed.xml`;
// const feed = `http://lorem-rss.herokuapp.com/feed?unit=second&interval=5`;

const api = new telegram({
    token: process.env.BOT_TOKEN,
    updates: {
        enabled: true
    }
});


const watcher = new Watcher(feed);
watcher.set({
    interval: 5,
    feed: feed
})

watcher
    .on(`new article`, (entries) => {
        console.log(entries);
        api.sendMessage({
            chat_id: channel,
            text: `${entries.title}: ${entries.link}`
        });
});

watcher.run();

console.log(`esperando...`);