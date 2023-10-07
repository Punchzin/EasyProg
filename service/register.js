const AWS =  require('aws-sdk');
const { name } = require('ejs');
const util = require('../utils/util');

AWS.config.update({
    region: 'sa-east-1'
})
const dynamodb = new AWS.DynamoDB.DocumentClient();
const userTable = 'EP-users';

async function register(userInfo){
    const email = userInfo.email;
    const password = userInfo.password
    if (!email || !password){
        return util.buildResponse(401, {
            message: 'All fields are required'
        })
    }

    const dynamoUser = await getUser(username);
    if (dynamoUser && dynamoUser.username){
        return util.buildResponse(401, )
    }
}