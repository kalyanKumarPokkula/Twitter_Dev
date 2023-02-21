import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

const create = async (req ,res) =>{
    try {
        const tweet = await tweetService.create(req.body);
        return res.status(201).json({
            data : tweet,
            message : "Successfully created a tweet",
            success : true,
            err : {}
        });
    } catch (error) {
        console.log('something went wrong in controller');
        return res.status(500).json({
            data : {},
            message : "Not able to create a tweet",
            success : false,
            err : error
        });
    }
}

export {
    create
}