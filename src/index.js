import express from 'express';
import  {connect}  from './config/database.js';
import { PORT } from './config/server-config.js';
import TweetService from './services/tweet-service.js';

const serverSetup = async () => {

    const app = express();
    app.listen(PORT , async () => {
        console.log(`Server started at port ${PORT}`);
        connect();
        console.log("mongo db connected");
        const service = new TweetService();
        const tweet = await service.create({
            content : 'Done with #refactor ?'
        });
        console.log(tweet);
    })
}

serverSetup();