'use strict';

module.exports.hello = async event => {
  let a = 0;
  let b = 0;

  a = event.queryStringParameters.a;
  b = event.queryStringParameters.b;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
        resultado = a + b
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
