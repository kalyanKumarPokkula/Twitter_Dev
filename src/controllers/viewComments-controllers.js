import ViewComments from '../services/viewcomments-service.js';

const viewcomments = new ViewComments();

const getcomments = async (req ,res) => {
    try {
        console.log(req.query.ModelId , req.query.ModelType);
        let comments = await viewcomments.getComments(req.query.ModelType , req.query.ModelId);
        return res.status(200).json({
            message : 'Successfully got a comments',
            success : true,
            data : comments,
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            message : "Something went wrong",
            success : false,
            data : {},
            err : error
        })
    }
}


export {
    getcomments
}


