const fs = require('fs');
const r = require('request');  //Required for Webpack
const rp = require('request-promise-native');

class ServerlessProxy {
  constructor(app) {
    this.app = app;
    this.socket = '/tmp/serverless-proxy.sock';
    if(fs.existsSync(this.socket)) {
      fs.unlinkSync(this.socket);
    }
    app.listen(this.socket);
  }

  request(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;

    const options = {
      uri: `http://unix:${this.socket}:${event.path}`,
      qs: event.queryStringParameters,
      headers: event.headers || {},
      resolveWithFullResponse: true,
      simple: false
    };

    rp(options)
      .then(function (response) {
        const successResponse = {
          statusCode: response.statusCode,
          body: response.body,
          headers: response.headers
        };
        callback(null, successResponse);
      })
      .catch(function (err) {
        console.error(err);
        const errorResponse = {
          statusCode: 502,
          body: '',
          headers: {}
        };
        callback(null, errorResponse);
      });
  }
}

module.exports = ServerlessProxy;
