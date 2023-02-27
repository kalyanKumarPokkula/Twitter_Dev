import { CrudRepository } from './index.js'
import User from '../models/user.js'

class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }

}

export default UserRepository;