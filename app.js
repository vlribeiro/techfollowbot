require('dotenv').config();
const rss = require(`./src/rss.js`);
const telegram = require(`./src/telegram.js`);
const feeds = require(`./data/feed_list.json`);

const onArticle = (feed, article) => {
    telegram.send(`From *${feed.provider_name}*\n\n${article.title}\n\n[Read full story](${article.link}`);
}

telegram.init(process.env.BOT_TOKEN);
rss.init(feeds, onArticle);