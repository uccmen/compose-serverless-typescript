import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

export const healthCheck: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Serverless app ${process.env.AWS_STAGE} is alive`
    }),
  };

  cb(null, response);
};
