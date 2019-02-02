require('dotenv').config();
const rss = require(`./src/rss.js`);
const telegram = require(`./src/telegram.js`);
const feeds = require(`./data/feed_list.json`);
const slack = require(`./src/slack`);

const onArticle = (feed, article) => {
    const slackLink = `<${article.link}|Read full story>`;
    const telegramLink = `[Read full story](${article.link})`;
    const message = `From *${feed.provider_name}*\n\n${article.title}\n\n`;

    telegram.send(`${message}${telegramLink}`);
    slack.send(`${message}${slackLink}`);
}

slack.init(process.env.SLACK_TOKEN);
telegram.init(process.env.BOT_TOKEN);
rss.init(feeds, onArticle);