const client = require('prom-client');

const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

const metricMiddleware = (req, res, next) => {
  res.on('finish', () => {
    httpRequestCounter.inc({
      method: req.method,
      route: req.url,
      status: res.statusCode,
    });
  });

  next();
};

module.exports = {
  metricMiddleware,
  httpRequestCounter,
};
