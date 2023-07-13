const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/v1", {
      target:
        "http://ec2-13-211-88-63.ap-southeast-2.compute.amazonaws.com:8080/",
      changeOrigin: true,
    })
  );
};
