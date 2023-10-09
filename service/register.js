const AWS =  require('aws-sdk');
const { name } = require('ejs');
const util = require('../utils/util');
const bcrypt = require('bcryptjs');

AWS.config.update({
    region: 'sa-east-1'
})
const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'EP-users';

async function register(userInfo){
    const username = userInfo.username;
    const password = userInfo.password
    if (!username || !password){
        return util.buildResponse(401, {
            message: 'All fields are required'
        })
    }

    const dynamoUser = await getUser(username.toLowercase().trim());
    if (dynamoUser && dynamoUser.username){
        return util.buildResponse(401, {
            message: 'Username already exists. Please choose a different one.'
        })
    }

    const encyptedPW = bcrypt.hashSync(password.trim(), 10);
    const user = {
        username: username.toLowercase().trim(),
        password: encyptedPW
    }

    const saveUserResponse = await saveUser(user);
    if (!saveUserResponse){
        return util.buildResponse(503, {message: 'Server Error. Try again later'});
    }
    return util.buildResponse(200, {username: username});
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

async function saveUser(user) {
    const params = {
        TableName: userTable,
        Item: user
    }
    return await dynamodb.put(params).promise().then(() => {
        return true;
    }, error => {
        console.error('There is an error saving User: ', error);
    })
}

module.exports.register = register; 