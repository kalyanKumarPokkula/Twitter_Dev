import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

const create = async (req ,res) =>{
    try {
        console.log(req.body);
        const tweet = await tweetService.create(req.body);
        return res.status(201).json({
            data : tweet,
            message : "Successfully created a tweet",
            success : true,
            err : {}
        });
    } catch (error) {
        return res.status(500).json({
            data : {},
            message : "Not able to create a tweet",
            success : false,
            err : error
        });
    }
}

const getTweet = async (req ,res) => {
    try {
        const tweet = await tweetService.get(req.params.id);
        return res.status(200).json({
            message : 'Successfully got at tweet',
            success : true,
            data : tweet,
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            message : "Not able to get a tweet",
            success : false,
            err : error
        });
    }
}

export {
    create,
    getTweet
}