const Tweet = require('../models/tweet');

exports.postTweet = async (req, res) => {
    try {
        const { text } = req.body;
        const tweet = await Tweet.create({ userId: req.userId, text });
        res.status(201).json(tweet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTimeline = async (req, res) => {
    try {
        const userId = req.params.userId;
        const tweets = await Tweet.findAll({ where: { userId } });
        res.status(200).json(tweets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
