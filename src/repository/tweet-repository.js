const Tweet = require('../models/tweet');

class TweetRepository {

    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            throw error
        }
    }

    async destory(dataId){
        try {
            const tweet = await Tweet.findOneAndRemove(dataId,
                function (err , docs){
                if(err){
                    console.log(err);
                }else{
                    console.log('original Doc:',docs);
                }
            });
            return tweet;;
        } catch (error) {
            throw error
        }
    }

    async get(id){
        try {
            const tweets = await Tweet.findById(id);
            return tweets;
        } catch (error) {
            throw error
        }
    }

    async update(data  , dataId){
        try {
            const tweet = await Tweet.findOneAndUpdate(dataId , data , 
                function (err , docs){
                    if(err){
                        console.log(err);
                    }else{
                        console.log('original Doc:',docs);
                    }
                }
            );
            return tweet;
        } catch (error) {
            throw error
        }
    }
}

module.exports = TweetRepository;