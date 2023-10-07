const AWS =  require('aws-sdk');
const { name } = require('ejs');
const util = require('../utils/util');
const bcrypt = require('bcryptjs');

AWS.config.update({
    region: 'sa-east-1'
})
const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'EP-users';

async function login(user){
    const username = user.username;
    const password = user.password;
    if (!user || !username || !password){
        return util.buildResponse(401, {
            message:'username and password are required'
        })
    }

    const dynamoUser = await getUser(username.toLowerCase().trim())
    if (!dynamoUser || !dynamoUser.username){
        return util.buildResponse(403, {message: 'user does not exist'});
    }

    
}