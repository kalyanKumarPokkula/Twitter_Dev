import {UserRepository} from '../repository/index.js';

class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async signup(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw error
        }
    }

    async signin(data){
        let user = await this.userRepository.getByEmail(data.email);
        if(!user){
            throw new Error('User not found')
        }
        if(!user.comparePassword(data.password)){
            throw new Error('Invalid password');
        }
        const token =  user.genJWT();
        return token;
    }
}

export default UserService;