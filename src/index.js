const express = require('express');
const connect = require('./config/database');

const { PORT } = require('./config/server-config');
const { HashtagRepository } = require('./repository/index');
const TweetService = require('./services/tweet-service');


const serverSetup = async () => {

    const app = express();
    app.listen(PORT , async () => {
        console.log(`Server started at port ${PORT}`);
        connect();
        console.log("mongo db connected");
        const tweetService = new TweetService();
        const tweet = await tweetService.create({
            content : "is #tweets working ?"
        });
        console.log(tweet);
        
        
        

    })
}

serverSetup();