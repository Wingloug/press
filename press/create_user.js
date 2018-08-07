letÂ AWSÂ =Â require('aws-sdk');
letÂ AmazonCognitoIdentityÂ =Â require('amazon-cognito-identity-js');
global.fetchÂ =Â require('node-fetch')
Â 
exports.handlerÂ =Â (event,Â context,Â callback)Â =>Â 
{
Â Â Â Â varÂ poolDataÂ =Â {Â UserPoolIdÂ :Â 'us-east-2_9jXhDvOq3',
Â Â Â Â Â Â Â Â ClientIdÂ :Â 'il3tqamv1lm4n4ct6hmmlrqob'
Â Â Â Â };
Â Â Â Â 
Â Â Â Â varÂ userPoolÂ =Â newÂ AmazonCognitoIdentity.CognitoUserPool(poolData);
Â 
Â Â Â Â varÂ attributeListÂ =Â [];
Â Â Â Â 
Â Â Â Â varÂ dataEmailÂ =Â {
Â Â Â Â Â Â Â Â NameÂ :Â 'email',
Â Â Â Â Â Â Â Â ValueÂ :Â event['email']
Â Â Â Â };
Â Â Â Â 
Â Â Â Â varÂ attributeEmailÂ =Â newÂ AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
Â 
Â Â Â Â attributeList.push(attributeEmail);
Â 
Â Â Â Â userPool.signUp(event['email'],Â event['password'],Â attributeList,Â null,Â function(err,Â result){
Â Â Â Â Â Â Â Â ifÂ (err)Â {
Â Â Â Â Â Â Â Â Â Â Â Â callback(null,Â err);
Â Â Â Â Â Â Â Â Â Â Â Â return;
Â Â Â Â Â Â Â Â }
Â Â Â Â Â Â Â Â varÂ cognitoUserÂ =Â result.user;
Â Â Â Â Â Â Â Â console.log('userÂ nameÂ isÂ 'Â +Â cognitoUser.getUsername());
Â Â Â Â Â Â Â Â callback(null,Â 'userÂ nameÂ isÂ 'Â +Â cognitoUser.getUsername());
Â Â Â Â });
};