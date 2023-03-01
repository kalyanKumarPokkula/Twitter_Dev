import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";

class TweetRepository extends CrudRepository{

    constructor(){
        super(Tweet);
    }

    // async create(data){
    //     try {
    //         const tweet = await Tweet.create(data);
    //         return tweet;
    //     } catch (error) {
    //         throw error
    //     }
    // }

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

    async getTweetWithComments(id){
        try {
            const tweet = await Tweet.findById(id).populate(
                {
                    path : 'comments'
                }).lean();
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
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

export default TweetRepository;
 