import UserService from "../services/user-service.js";

const userService = new UserService();

const signup = async (req ,res) => {
    try {
        let user = await userService.signup(req.body);
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

const signin = async (req ,res) => {
    try {
        let token = await userService.signin(req.body);
        return res.status(200).json({
            message : 'Successfully generate a token',
            success :true,
            data : token,
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            message : error.message,
            success : false,
            err : error
        })
    }
}

export {
    signup,
    signin
}