const Hashtag = require('../models/hashtags');

class HashtagRepository {

    async create(data){
        try {
            const tag = await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async destory(dataId){
        try {
            const tag = await Hashtag.findOneAndRemove(dataId,
                function (err , docs){
                if(err){
                    console.log(err);
                }else{
                    console.log('original Doc:',docs);
                }
            });
            return tag;;
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async bulkcreate(data){
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async get(id){
        try {
            const tag = await Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async findByName(titleList){
        try {
            const responses = await Hashtag.find({
                title : titleList
            });
            // .select('title -_id');;
            return responses;
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async update(data  , dataId){
        try {
            const tag = await Hashtag.findOneAndUpdate(dataId , data , 
                function (err , docs){
                    if(err){
                        console.log(err);
                    }else{
                        console.log('original Doc:',docs);
                    }
                }
            );
            return tag;
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}

module.exports = HashtagRepository;