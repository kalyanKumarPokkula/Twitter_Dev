import { UserRepository } from '../repository/index.js';

const userRepository = new UserRepository();

const usercreate = async (req ,res) => {
    try {
        let user = await userRepository.create(req.body);
        return res.status(201).json({
            data : user,
            message : "Successfully created a user",
            success : true,
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            message : 'Not able to create a user',
            success : false,
            err : error
        })
    }
}

export {
    usercreate
}