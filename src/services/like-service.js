import { LikeRepository,TweetRepository } from "../repository/index.js";

class LikeService {

    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId ,modelType , userId ){
        if(modelType == 'Tweet'){
            var likeable = await this.tweetRepository.get(modelId);
            // likeable.populate({path : 'likes'});
            console.log(likeable);

        }else if(modelType == 'Comment'){

        }else {
            throw Error("unknown model type")
        }

        let exists = await this.likeRepository.findByUserAndLikeable({
            onModel : modelType,
            likeable : modelId,
            user : userId
        })

        if(exists){
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.remove();
            var isRemoved = true;

        }else{
            let like = await this.likeRepository.create({
                onModel : modelType,
                likeable : modelId,
                user : userId
            });
            likeable.likes.push(like);
            await likeable.save();
            var isRemoved = false;
        }

        return isRemoved;
    }
}


export default LikeService;