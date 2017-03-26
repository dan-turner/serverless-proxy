import app from './src/app';
import ServerlessProxy from 'serverless-proxy';

const appProxy = new ServerlessProxy(app);

export const proxy = (event, context, cb) => appProxy.request(event, context, cb);
