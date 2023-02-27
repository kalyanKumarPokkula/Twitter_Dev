import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import  {connect}  from './config/database.js';
import { PORT } from './config/server-config.js';
import router from './routes/index.js';
import { TweetRepository,UserRepository } from './repository/index.js'
import LikeService from './services/like-service.js';

const logger = morgan('combined');

const serverSetup = async () => {

    const app = express();

    app.use(logger);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    
    app.use('/api' , router);

    app.listen(PORT , async () => {
        console.log(`Server started at port ${PORT}`);
        connect();
        console.log("mongo db connected");
        const tweetRepo = new TweetRepository();
        const userRepo = new UserRepository();
        const tweets = await tweetRepo.getAll();
        const user = await userRepo.getAll();
        const likeable = new LikeService();
        
        const tweet = await tweetRepo.get(tweets[0].id);
        console.log(tweet);
        
        
        

        
    })
}

serverSetup();