import CommentService from '../services/comment-service.js';

const commentService = new CommentService();

const createComment = async (req ,res) => {
    try {
        const comment = await commentService.create(
             req.query.onModel,
             req.query.ModelId,
             req.body.userId,
             req.body.content
             );
        return res.status(201).json({
            data : comment,
            message : 'Successfully created a comment',
            success : true,
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            message : "Not able comment on post",
            success : true,
            err : error
        })
    }
}

export {
    createComment
}