const AWS =  require('aws-sdk');
const { name } = require('ejs');
const util = require('../utils/util');
const bcrypt = require('bcryptjs');
const auth = require('../utils/auth');

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

    if (!bcrypt.compareSync(password, dynamoUser.password)){
        return util.buildResponse(403, {message: 'password is incorret'});
    }

    const userInfo = {
        username: dynamoUser.username
    }

    const token = auth.generateToken(userInfo);
    const response = {
        user: userInfo,
        token: token
    };
    return util.buildResponse(200, response);
}

async function getUser(username){
    const params = {
        TableName: userTable,
        Key: {
            username: username 
        }
    }
    return await dynamodb.get(params).promise().then(response => {
        return response.Item;   
    }, error => {
        console.error('There is an error getting User: ', error);
    })
}

module.exports.login = login; 