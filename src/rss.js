const Watcher = require(`rss-watcher`);
const watchers = [];

const init = (feeds, onArticle) => {
    for (let feed of feeds) {
        console.log(feed.feed_url);
        const watcher = new Watcher(feed.feed_url);

        watcher.set({ interval: 5 });
        watcher.on(`new article`, (entries) => { onArticle(feed, { title: entries.title, link: entries.link }) });
        watcher.run();
        watchers.push(watcher);
    }
}

module.exports = { init };