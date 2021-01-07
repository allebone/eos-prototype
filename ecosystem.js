module.exports = {
  apps: [
    {
      name: "WEB",
      script: "./node_modules/@vue/cli-service/bin/vue-cli-service.js",
      args: "serve --host 0.0.0.0 --public eos.bockscar.cloud:8081"
    }
  ]
};
