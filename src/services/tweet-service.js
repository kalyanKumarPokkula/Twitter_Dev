const {TweetRepository , HashtagRepository} = require('../repository/index');

class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        try {
            const content = data.content;
            let tags = content.match(/#[a-zA-Z0-9_]+/g);
            tags = tags.map(ele => ele.substring(1));
            const tweet = await this.tweetRepository.create(data);
            let alreadyPresentTags = await (await this.hashtagRepository.findByName(tags));
            let titleOfPrensenttags = alreadyPresentTags.map(tag => tag.title);
            let newTags = tags.filter(tag => !titleOfPrensenttags.includes(tag));
            newTags = newTags.map((tag) => {
                return {
                    title : tag,
                    tweets : [tweet._id]
                }})

            const Bulkcreate = await this.hashtagRepository.bulkcreate(newTags);
            alreadyPresentTags.forEach((tag) => {
                tag.tweets.push(tweet._id);
                tag.save();
            })
            return tweet;

        } catch (error) {
            console.log("something wrong in service layer");
            throw error;
        }
    }
}

module.exports = TweetService;