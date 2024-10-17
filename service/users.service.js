const { Users, Roles } = require("../models");
const bcrypt = require("bcrypt");

//Register User
async function createUser(name,email,username, hashPassword, roleId) {
    try { 
        const usernameExist = await Users.findOne({
            where: {
                username: username
            }
        })

        const emailExist = await Users.findOne({
            where: {
                email: email
            }
        })

        if(usernameExist) {
            return {
                error: true,
                status: 409,
                payload: "Sorry, that username already exists!"
            }
        }

        if(emailExist) {
            return {
                error: true,
                status: 409,
                payload: "Sorry, a user already exists with that email address!"
            }
        }

        const newUser = await Users.create({
            name: name,
            email: email,
            username: username,
            password: hashPassword,
            roleId: roleId
           
          });

          return {            
            error: false,
            status: 200,
            payload: "User Successfully Created"
        }

    } catch (error) {
        console.error('Error Creating User Service : ',error);
        throw error;
    }
}

//Login User
async function loginUser(username) {
    try {
        const user = await Users.findOne({ 
            where: { 
                username: username
                 
            } 
            
        }
        
        );
        return user;
    } catch (error) {
        console.error('Error Login In User Service : ',error);
        throw error;
    }
}

//Get User By ID
async function getUserById(id) {
    try {
        const user = await Users.findByPk(id, {
            attributes: {exclude: ["password"]},
            include: [{
                model: Roles,
                as: 'roles'
            }]
        });

        if(!user){
            return {
                error : true,
                status: 404,
                payload: "User not Found."
            }
        }

        const response = {
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            createdOn: user.createdAt.toISOString().split('T')[0],
            role: user.roles.role,
            roleId: user.roles.id
        }

        return {
            error: false,
            status: 200,
            payload: response
        };

    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    loginUser,
    getUserById
}

