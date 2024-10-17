const bcrypt = require("bcrypt");
const userService = require("../service/users.service");
const { sign } = require("jsonwebtoken");

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

//Login User
async function loginUser(req, res) {
    try {
        const { username, password } = req.body;

        const user = await userService.loginUser(username);

        if (!user) {
            return res.json({ 
                error: true,
                payload: "User Doesn't Exist"
             });
            
          }
        else {
            bcrypt.compare(password, user.password).then(async (match) => {
                if (!match) {res.status(400).json({ 
                    error: true,
                    payload: "Wrong Username And Password Combination" 
                });
            }
                else{
                  const accessToken = sign(
                    { username: user.username, id: user.id, role: user.roles.role, roleId: user.roleId },
                    "importantsecret"
                  );
                  res.status(200).json({
                    error: false,
                    payload: accessToken
                  });
                }  
              });
        }     
    } catch (error) {
        return res.status(500).json({
            error: true,
            payload: error
        })
    }
}

module.exports = {
    registerUser,
    loginUser
}

