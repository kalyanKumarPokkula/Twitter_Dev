import { CrudRepository } from './index.js'
import User from '../models/user.js'
import ValidationError from '../utils/error/validation-error.js';

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }

    async create(data){
        try {
           let result = await User.create(data);
           return result; 
        } catch (error) {
            console.log("Something went wrong in user Repo");
            console.log(error);
            throw error;
        }
    }

    async getByEmail(data){
        try {
           let user = await User.findOne({email : data});
           return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

export default UserRepository;