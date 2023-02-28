import  LikeService  from '../services/like-service.js';

const likeService = new LikeService();

const togglelike = async (req ,res) => {
    try {
        console.log(req.query);
        console.log(req.body);
        let like = await likeService.toggleLike(req.query.ModelId ,req.query.onModel, req.body.userId);
        return res.status(200).json({
            data : like ? 'unliked' : 'liked',
            message : 'Successfully liked or unliked',
            success : true,
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            message : 'Not able to like a post',
            success : false,
            err : error
        })
    }

    
}

export {
    togglelike
}