Run your existing [Node.js](https://nodejs.org/) HTTP middleware based application in [Serverless](https://serverless.com/), on top of [AWS Lambda](https://aws.amazon.com/lambda/) and [Amazon API Gateway](https://aws.amazon.com/api-gateway/).

## Getting Started

```bash
npm install --save serverless-proxy
```

```js
// handler.js
import ServerlessProxy from 'serverless-proxy';
import app from './src/app';

const appProxy = new ServerlessProxy(app);

export const proxy = (event, context, cb) => appProxy.request(event, context, cb);
```
