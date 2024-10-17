const bcrypt = require("bcrypt");
const userService = require("../service/users.service");
//const { sign } = require("jsonwebtoken");

//Register User 
async function registerUser(req, res) {
    try {
        
        const {name,email, username, password} = req.body;

        const hashPassword = await bcrypt.hash(password, 10);
        const result = await userService.createUser(name,email,username, hashPassword);
        
        if(result.error) {
            return res.status(result.status).json ({
                error: true,
                payload: result.payload
            })
        } else {
            return res.status(result.status).json ({
                error: false,
                payload: result.payload
            })
        } 

    } catch (error) {
        return res.status(500).json({
            error: true,
            payload: error
        })
    }
}

module.exports = {
    registerUser
}