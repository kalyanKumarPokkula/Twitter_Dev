import {CommentRepository ,TweetRepository} from '../repository/index.js';

class CommentService {
    constructor(){
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }

    async create(onModel , ModelId , UserId , content){
        if(onModel == 'Tweet'){
            var commentable = await this.tweetRepository.get(ModelId);
            console.log(commentable);
        }else if(onModel == 'Comment'){
            var commentable = await this.commentRepository.get(ModelId);
        }else {
            throw new Error('Unknow Model Type')
        }

        const comment = await this.commentRepository.create({
            content : content,
            userId : UserId,
            onModel : onModel,
            commentable : ModelId,
            comments : [],
            likes : []
        })
        commentable.comments.push(comment);
        await commentable.save();

        return comment;
    }

    async getMoreComments(commentId){
        try {
            console.log('inside comment service' , commentId);
            let response = await this.commentRepository.getComments(commentId);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export default CommentService;