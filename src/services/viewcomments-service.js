import { TweetRepository , CommentRepository } from "../repository/index.js";

class ViewComments{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.commentRepository =  new CommentRepository();
    }

    async getComments(ModelType , ModelId){
        try {
            if(ModelType == 'Tweet'){
                var comments = await this.tweetRepository.getComments(ModelId);
            }else if(ModelType == 'Comment'){
                var comments = await this.tweetRepository.getComments(ModelId);
            }else{
                throw Error('Unknow model type')
            }
            return comments;     
        } catch (error) {
            throw error
        }
    }

}

export default ViewComments;