class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
           let result = await this.model.create(data);
           return result; 
        } catch (error) {
            console.log("Something went wrong in Crud Repo");
            throw error;
        }
    }

    async getAll(){
        try {
           let result = await this.model.find({}).limit(3);
           return result; 
        } catch (error) {
            console.log("Something went wrong in Crud Repo");
            throw error;
        }
    }

    async destroy(id){
        try {
            let result = await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in Crud Repo");
            throw error;
        }
    }

    async get(id){
        try {
            const tweets = await this.model.findById(id);
            return tweets;
        } catch (error) {
            throw error
        }
    }

    async update(id , data){
        try {
            let result = await this.model.findByIdAndUpdate(id , data , {new : true});
            return result;
        } catch (error) {
            console.log("Something went wrong in Crud Repo");
            throw error;
        }
    }
}

export default CrudRepository;